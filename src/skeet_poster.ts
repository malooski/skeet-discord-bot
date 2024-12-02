import { Client, EmbedBuilder, GatewayIntentBits, PermissionsBitField } from "discord.js";

import type { AppBskyFeedPost } from "@atcute/client/lexicons";
import { Agent, type BlobRef, ComAtprotoLabelDefs, CredentialSession } from "@atproto/api";
import { DidResolver, HandleResolver, MemoryCache } from "@atproto/identity";
import { Jetstream } from "@skyware/jetstream";
import { REST, Routes } from "discord.js";
import { WebSocket } from "ws";
import { formatBskyPostUri, getFullsizeImageUrl, makeProfileLink } from "./bsky-helpers";
import type { DiscordCommandDefinition } from "./commands";
import { ENV_VARS, IS_DEV_MODE } from "./env";
import { PrismaClient } from "./generated/prisma";
import { removeNilEntries } from "./helpers/common";
import { fetchHandle } from "./helpers/handle";
import type { PrismaConnector } from "./helpers/prisma";
import { logger } from "./logger";
import { RunningAverage } from "./running-average";

let createdOpCount = 0;
let lastMessageTime = Date.now();
const messageTimeAverage = new RunningAverage(1000);
const messageProcessingTimeAverage = new RunningAverage(1000);

const GUILD_COMMANDS_TTL = 1000 * 60 * 60 * 24; // 1 days
const SERVICE_URL = new URL("https://bsky.social");

interface CachedTrackingConfig {
    channel: string;
    showReposts: boolean;
    includeReplies: boolean;
    filterHashtag?: string;
}

export class SkeetPoster {
    creds = new CredentialSession(SERVICE_URL);
    agent = new Agent(this.creds);
    db = new PrismaClient();
    cursor: string | undefined = undefined;

    // Map<Did, CachedTrackingConfig[]>
    configs = new Map<string, CachedTrackingConfig[]>();

    jetstream = new Jetstream({
        ws: WebSocket,
    });
    discord = new Client({
        intents: [GatewayIntentBits.Guilds],
    });
    handleResolver = new HandleResolver();
    didCache = new MemoryCache();
    didResolver = new DidResolver({
        plcUrl: "https://plc.directory",
        didCache: this.didCache,
    });
    rest = new REST().setToken(ENV_VARS.DISCORD_TOKEN);

    commands: DiscordCommandDefinition[] = [];

    // Map<GuildId, Date>
    lastPushedCommands = new Map<string, Date>();

    async pushCommandsToGuild(guildId: string) {
        const commands = this.commands.map((command) => command.data.toJSON());
        await this.rest.put(Routes.applicationGuildCommands(ENV_VARS.DISCORD_CLIENT_ID, guildId), {
            body: commands,
        });
    }

    registerCommand(command: DiscordCommandDefinition) {
        this.commands.push(command);
        this.discord.on("interactionCreate", async (interaction) => {
            const interactionString = interaction.toString();
            try {
                if (interaction.isChatInputCommand()) {
                    if (interaction.commandName !== command.data.name) return;
                    logger.info({ interaction: interactionString }, "Chat Input Command");

                    await command.execute(interaction);
                }

                if (interaction.isAutocomplete()) {
                    if (interaction.commandName !== command.data.name) return;
                    if (!command.autocomplete) return;

                    await command.autocomplete(interaction);
                }
            } catch (e) {
                logger.error(
                    { error: e, interaction: interactionString },
                    "Error handling interaction",
                );
            }
        });
    }

    async assertDiscordUserGuildAdmin(userId: string, channelId: string) {
        const channel = await this.getValidDiscordChannel(channelId);

        const permissions = await channel.permissionsFor(userId);
        if (!permissions) {
            throw new Error("Permissions not found");
        }

        if (!permissions.has(PermissionsBitField.Flags.Administrator)) {
            throw new Error("Missing Administrator permission");
        }

        return true;
    }

    async addTracking(args: {
        did: string;
        channelId: string;
        showReposts?: boolean;
        hashtag?: string;
        addedByDiscordUserId?: string;
        includeReplies?: boolean;
    }) {
        logger.info(
            {
                did: args.did,
                channelId: args.channelId,
                showReposts: args.showReposts,
                hashtag: args.hashtag,
                addedByDiscordUserId: args.addedByDiscordUserId,
                includeReplies: args.includeReplies,
            },
            `Adding tracking for ${args.did} in ${args.channelId}`,
        );

        const dsChannel = await this.getValidDiscordChannel(args.channelId);
        const resp = await this.agent.getProfile({ actor: args.did });
        const profile = resp.data;
        if (!profile) {
            throw new Error("Profile not found");
        }

        try {
            await this.db.$transaction(async (tx) => {
                const user = await this.upsertDbUser({ tx, did: args.did });
                const channel = await this.upsertDbChannel({
                    tx,
                    channelId: dsChannel.id,
                });

                await this.upsertDbConfig({
                    tx,
                    channelId: channel.id,
                    userId: user.id,
                    showReposts: args.showReposts,
                    hashtag: args.hashtag,
                    addedByDiscordUserId: args.addedByDiscordUserId,
                    includeReplies: args.includeReplies,
                });
            });
        } catch (e) {
            logger.error({ error: e }, "Error adding tracking");
        }

        await this.refreshLocalConfigs();
    }

    async removeTracking(args: { did: string; channelId: string }) {
        try {
            await this.db.trackingConfig.deleteMany({
                where: {
                    channel: {
                        channelId: args.channelId,
                    },
                    user: {
                        did: args.did,
                    },
                },
            });
        } catch (e) {
            logger.error({ error: e }, "Error removing tracking");
        }

        await this.refreshLocalConfigs();
    }

    async getTrackedDidsOnChannel(channelId: string): Promise<string[]> {
        const configs = await this.db.trackingConfig.findMany({
            where: {
                channel: {
                    channelId: channelId,
                },
            },
        });

        const users = await this.db.trackedUser.findMany({
            where: {
                id: {
                    in: configs.map((config) => config.userId),
                },
            },
        });

        return users.map((user) => user.did);
    }

    async refreshLocalConfigs() {
        const startTime = Date.now();
        logger.info("Updating Cached");

        const configs = await this.db.trackingConfig.findMany({
            select: {
                id: true,
                user: true,
                channel: true,
                showReposts: true,
                includeReplies: true,
                filterHashtag: true,
            },
        });

        this.configs.clear();
        for (const config of configs) {
            const configs = this.configs.get(config.user.did) ?? [];
            configs.push({
                channel: config.channel.channelId,
                showReposts: config.showReposts,
                includeReplies: config.includeReplies,
                filterHashtag: config.filterHashtag ?? undefined,
            });
            this.configs.set(config.user.did, configs);
        }

        const endTime = Date.now();
        const duration = endTime - startTime;
        logger.info(
            {
                dids: this.configs.size,
                configs: configs.length,
                duration,
            },
            "Updated local configs",
        );
    }

    async initialize() {
        logger.info("Initializing SkeetPoster");
        this.discord.application?.commands.set(this.commands.map((c) => c.data));

        this.discord.on("ready", () => {
            logger.info("Discord ready");
        });

        await this.discord.login(ENV_VARS.DISCORD_TOKEN);

        await this.db.$connect();
        await this.creds.login({
            identifier: ENV_VARS.BSKY_IDENTIFIER,
            password: ENV_VARS.BSKY_PASSWORD,
        });

        logger.info("Registering commands");
        const commands = this.commands.map((command) => command.data.toJSON());
        await this.rest.put(Routes.applicationCommands(ENV_VARS.DISCORD_CLIENT_ID), {
            body: commands,
        });
    }

    async startRefreshingGuildCommands() {
        this.discord.on("guildAvailable", async (guild) => {
            await this.pushCommandsToGuild(guild.id).catch((e) => {
                logger.error(e, "Error pushing commands to guild");
            });
        });
    }

    async startRefreshingLocalConfigs() {
        // Refresh trackedDids every 15min
        await this.refreshLocalConfigs();
        setInterval(
            () => {
                this.refreshLocalConfigs();
            },
            1000 * 60 * 5, // 5min
        );
    }

    async run() {
        await this.startRefreshingLocalConfigs();
        await this.startRefreshingGuildCommands();

        setInterval(() => {
            logger.info(
                {
                    avgMessageMs: messageTimeAverage.get(),
                    ops: createdOpCount,
                    avgProcessingMs: messageProcessingTimeAverage.get(),
                },
                `Processed ${createdOpCount} ops/s`,
            );
            createdOpCount = 0;
        }, 1000);

        // Listen on firehose
        this.jetstream.onCreate("app.bsky.feed.post", async (event) => {
            createdOpCount++;
            const now = Date.now();
            const messageTime = now - lastMessageTime;
            messageTimeAverage.add(messageTime);
            lastMessageTime = now;

            lastMessageTime = now;
            try {
                if (event.commit.record.$type !== "app.bsky.feed.post") {
                    logger.error({ event }, "Event is not a feed post");
                    return;
                }

                const record = event.commit.record;

                const configs = this.configs.get(event.did);
                if (!configs || configs.length === 0) return;

                // Warn if the event is older than 10 seconds
                const eventTime = new Date(event.time_us / 1000);

                let imgUrl: string | undefined = undefined;
                if (record.embed?.$type === "app.bsky.embed.images") {
                    const embed = record.embed;

                    // TODO: Atproto should have a better type for this (maybe atcute/client)
                    const refLink = embed.images[0].image.ref.$link;
                    imgUrl = getFullsizeImageUrl(
                        event.did,
                        refLink,
                        embed.images[0].image.mimeType,
                    );
                }

                let text = event.commit.record.text;

                if (imgUrl) {
                    const labels = getContentWarningLabels(record);
                    // If there are content warning labels, don't embed the image.
                    if (labels.length > 0) {
                        imgUrl = undefined;
                        text += `\n\nContent Warning: ${labels.join(", ")}`;
                    }
                }

                if (IS_DEV_MODE) {
                    text += `\n\nEVENT: ${JSON.stringify(event)}`;
                }

                const resp = await this.agent.getProfile({ actor: event.did });
                const profile = resp.data;

                const embed = createSkeetEmbed({
                    text: text,
                    uri: formatBskyPostUri(profile.handle, event.commit.rkey),
                    authorHandle: profile.handle,
                    authorUrl: makeProfileLink(profile.handle),
                    createdAt: new Date(event.commit.record.createdAt),
                    authorIconUrl: profile.avatar,
                    authorName: profile.displayName,
                    imgUrl: imgUrl,
                    isReply: !!event.commit.record.reply,
                });

                await Promise.all(
                    configs.map(async (config) => {
                        // Don't send if the text doesn't include the hashtag
                        if (config.filterHashtag && !text.includes(config.filterHashtag)) return;

                        // Don't include replies if the config doesn't want them
                        if (record.reply && !config.includeReplies) return;

                        const channelId = ENV_VARS.DISCORD_CHANNEL_ID_DEBUG ?? config.channel;
                        const dsChannel = await this.getValidDiscordChannel(channelId);
                        await dsChannel.send({ embeds: [embed] });
                    }),
                );

                const endTime = Date.now();
                const duration = endTime - now;
                const offset = endTime - eventTime.getTime();
                logger.info({ duration, offset, event }, "Processed event");
            } catch (e) {
                logger.error({ error: e, event }, "Error processing event");
            } finally {
                const endTime = Date.now();
                const duration = endTime - now;
                messageProcessingTimeAverage.add(duration);
            }
        });

        this.jetstream.on("error", (e) => {
            logger.error({ error: e }, "Error on jetstream");
        });

        this.jetstream.start();

        this.jetstream.on("close", () => {
            logger.error("Jetstream closed");
        });

        logger.info("SkeetPoster is now running");
    }

    async upsertDbUser(args: { tx?: PrismaConnector; did: string }) {
        const db = args.tx ?? this.db;
        const user = await db.trackedUser.upsert({
            create: {
                did: args.did,
            },
            update: {},
            where: {
                did: args.did,
            },
        });
        return user;
    }

    async upsertDbChannel(args: { tx?: PrismaConnector; channelId: string }) {
        const db = args.tx ?? this.db;
        const channel = await db.discordChannel.upsert({
            create: {
                channelId: args.channelId,
            },
            update: {},
            where: {
                channelId: args.channelId,
            },
        });

        return channel;
    }

    async upsertDbConfig(args: {
        tx?: PrismaConnector;
        channelId: number;
        userId: number;
        showReposts?: boolean;
        hashtag?: string;
        addedByDiscordUserId?: string;
        includeReplies?: boolean;
    }) {
        const db = args.tx ?? this.db;
        await db.trackingConfig.upsert({
            create: {
                channelId: args.channelId,
                userId: args.userId,
                filterHashtag: args?.hashtag ?? undefined,
                showReposts: args?.showReposts ?? false,
                addedByDiscordUserId: args.addedByDiscordUserId,
                includeReplies: args.includeReplies,
            },
            update: {
                filterHashtag: args?.hashtag ?? null,
                showReposts: args?.showReposts ?? false,
                ...removeNilEntries({
                    addedByDiscordUserId: args.addedByDiscordUserId,
                    includeReplies: args.includeReplies,
                }),
            },
            where: {
                userId_channelId: {
                    channelId: args.channelId,
                    userId: args.userId,
                },
            },
        });
    }

    async getValidDiscordChannel(channelId: string) {
        const channel = await this.discord.channels.fetch(channelId);
        if (!channel?.isTextBased()) {
            throw new Error("Channel is not a text channel");
        }

        if (channel.isDMBased()) {
            throw new Error("Channel is a DM channel");
        }

        if (channel.isThread()) {
            throw new Error("Channel is a thread");
        }

        // Has posting permissions
        if (!this.discord.user) {
            throw new Error("Discord user not found");
        }

        const permissions = await channel.permissionsFor(this.discord.user);

        if (
            permissions == null ||
            permissions.has(PermissionsBitField.Flags.SendMessages) === false
        ) {
            throw new Error("Channel does not have send messages permission");
        }

        return channel;
    }

    async getChannelStatus(channelId: string) {
        const users = await this.getTrackedDidsOnChannel(channelId);

        const handles = await Promise.all(users.map((user) => fetchHandle(this.didResolver, user)));
        const userList = handles.filter((h) => h != null).join(", ");

        const msg = [
            "Skeet Poster is online!",
            `Tracking ${users.length} users in this channel: ${userList}`,
        ].join("\n");

        return msg;
    }
}

function createSkeetEmbed(data: {
    text: string;
    uri: string;
    authorName?: string;
    authorHandle: string;
    authorIconUrl?: string;
    authorUrl: string;
    createdAt: Date;
    isReply?: boolean;

    imgUrl?: string;
}) {
    let title = `${data.authorHandle} skeeted.`;
    if (data.isReply) {
        title = `${data.authorHandle} replied.`;
    }

    let embed = new EmbedBuilder()
        .setTitle(title)
        .setURL(data.uri)
        .setAuthor({
            name: data.authorName ?? data.authorHandle,
            iconURL: data.authorIconUrl,
            url: data.authorUrl,
        })
        .setDescription(data.text)
        .setFooter({ text: "Skeet Poster by @maloo.ski" })
        .setTimestamp(new Date(data.createdAt));

    if (data.imgUrl) {
        embed = embed.setImage(data.imgUrl);
    }

    return embed;
}

const CONTENT_WARNING_LABELS = new Set(["porn", "sexual", "nudity", "gore", "corpse"]);
function getContentWarningLabels(post: AppBskyFeedPost.Record) {
    if (!ComAtprotoLabelDefs.isSelfLabels(post.labels)) return [];

    return post.labels.values
        .filter((label) => CONTENT_WARNING_LABELS.has(label.val))
        .map((v) => v.val);
}
