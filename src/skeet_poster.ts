import { Client, EmbedBuilder, GatewayIntentBits, PermissionsBitField, User } from "discord.js";

import { BskyAgent } from "@atproto/api";
import { DidResolver, HandleResolver, MemoryCache } from "@atproto/identity";
import { PrismaClient } from "@prisma/client";
import { REST, Routes } from "discord.js";
import { convertAtUriToBskyUri, makeProfileLink } from "./bsky-helpers";
import { Firehose, getOpsByType } from "./bsky-helpers/firehose";
import { isCommit } from "./bsky-helpers/lexicon/types/com/atproto/sync/subscribeRepos";
import { DiscordCommandDefinition } from "./commands";
import {
    BSKY_FIREHOSE_URL,
    BSKY_IDENTIFIER,
    BSKY_PASSWORD,
    DISCORD_ADMIN_ID,
    DISCORD_CLIENT_ID,
    DISCORD_TOKEN,
} from "./env";
import { PrismaConnector } from "./helpers/prisma";
import { logger } from "./logger";
import { ProfileCache, ProfileData } from "./profile_cache";

const GUILD_COMMANDS_TTL = 1000 * 60 * 60 * 24; // 1 days

export class SkeetPoster {
    agent = new BskyAgent({
        service: "https://bsky.social",
    });
    db = new PrismaClient();
    trackedDids = new Set<string>();
    firehose = new Firehose(BSKY_FIREHOSE_URL);
    discord = new Client({
        intents: [GatewayIntentBits.Guilds],
    });
    handleResolver = new HandleResolver();
    didCache = new MemoryCache();
    didResolver = new DidResolver({
        plcUrl: "https://plc.directory",
        didCache: this.didCache,
    });
    profileCache = new ProfileCache(this.agent, this.handleResolver);
    rest = new REST().setToken(DISCORD_TOKEN);
    discordAdmin: User | undefined;

    commands: DiscordCommandDefinition[] = [];

    // Map<GuildId, Date>
    lastPushedCommands = new Map<string, Date>();

    constructor() {}

    async pushCommandsToGuild(guildId: string) {
        const commands = this.commands.map(command => command.data.toJSON());
        await this.rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, guildId), {
            body: commands,
        });
    }

    registerCommand(command: DiscordCommandDefinition) {
        this.commands.push(command);
        this.discord.on("interactionCreate", async interaction => {
            try {
                if (interaction.isChatInputCommand()) {
                    if (interaction.commandName !== command.data.name) return;

                    await command.execute(interaction);
                }

                if (interaction.isAutocomplete()) {
                    if (interaction.commandName !== command.data.name) return;
                    if (!command.autocomplete) return;

                    await command.autocomplete(interaction);
                }
            } catch (e) {
                logger.error(e, "Error handling interaction");
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
    }) {
        logger.info(
            {
                did: args.did,
                channelId: args.channelId,
                showReposts: args.showReposts,
                hashtag: args.hashtag,
                addedByDiscordUserId: args.addedByDiscordUserId,
            },
            `Adding tracking for ${args.did} in ${args.channelId}`
        );

        const profile = await this.profileCache.getProfile(args.did);
        const dsChannel = await this.getValidDiscordChannel(args.channelId);

        try {
            await this.db.$transaction(async tx => {
                const user = await this.upsertDbUser({ tx, did: profile.did });
                const channel = await this.upsertDbChannel({ tx, channelId: dsChannel.id });

                await this.upsertDbConfig({
                    tx,
                    channelId: channel.id,
                    userId: user.id,
                    showReposts: args.showReposts,
                    hashtag: args.hashtag,
                    addedByDiscordUserId: args.addedByDiscordUserId,
                });
            });
        } catch (e) {
            logger.error(e, "Error adding tracking");
        }

        this.trackedDids.add(args.did);
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
            logger.error(e, "Error removing tracking");
        }
    }

    async getTrackedUsersOnChannel(channelId: string): Promise<ProfileData[]> {
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
                    in: configs.map(config => config.userId),
                },
            },
        });

        const profiles = await this.profileCache.getProfiles(users.map(user => user.did));

        return profiles;
    }

    async refreshTrackedDids() {
        logger.info("Refreshing trackedDids");

        const configs = await this.db.trackingConfig.findMany({
            select: {
                id: true,
                user: true,
            },
        });

        this.trackedDids.clear();
        for (const config of configs) {
            this.trackedDids.add(config.user.did);
        }

        logger.info(`Found ${this.trackedDids.size} trackedDids`);
    }

    async initialize() {
        logger.info("Initializing SkeetPoster");
        this.discord.application?.commands.set(this.commands.map(c => c.data));

        this.discord.on("ready", () => {
            logger.info("Discord ready");
        });

        await this.discord.login(DISCORD_TOKEN);

        this.discordAdmin = await this.discord.users.fetch(DISCORD_ADMIN_ID);

        await this.db.$connect();
        await this.agent.login({
            identifier: BSKY_IDENTIFIER,
            password: BSKY_PASSWORD,
        });

        logger.info("Registering commands");
        const commands = this.commands.map(command => command.data.toJSON());
        await this.rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });
    }

    async startRefreshingGuildCommands() {
        this.discord.on("guildAvailable", async guild => {
            const lastPushed = this.lastPushedCommands.get(guild.id);

            // If we haven't pushed commands to this guild in a while, push them again
            if (lastPushed == null || Date.now() - lastPushed.getTime() > GUILD_COMMANDS_TTL) {
                logger.info(
                    {
                        guildName: guild.name,
                        guildId: guild.id,
                    },
                    `Pushing commands to guild "${guild.name}" (${guild.id})`
                );
                this.lastPushedCommands.set(guild.id, new Date());

                await this.pushCommandsToGuild(guild.id).catch(e => {
                    logger.error(e, "Error pushing commands to guild");
                });
            }
        });
    }

    async startRefreshingTrackedDids() {
        // Refresh trackedDids every 15min
        await this.refreshTrackedDids();
        setInterval(() => {
            this.refreshTrackedDids();
        }, 1000 * 60 * 15);
    }

    async run() {
        await this.startRefreshingTrackedDids();
        await this.startRefreshingGuildCommands();

        let start = Date.now();
        let lastStart = Date.now();

        // Listen on firehose
        this.firehose.handleEvent = async evt => {
            try {
                if (!isCommit(evt)) return;
                const ops = await getOpsByType(evt);

                for (const op of ops.posts.creates) {
                    console.log(op.record.text);
                }

                if (true as boolean) return;

                const createdOps = ops.posts.creates.filter(op => this.trackedDids.has(op.author));
                const repostedOps = ops.reposts.creates.filter(op =>
                    this.trackedDids.has(op.author)
                );

                await this.profileCache.getProfiles([
                    ...createdOps.map(op => op.author),
                    ...repostedOps.map(op => op.author),
                ]); // Seed cache with profiles.

                for (const op of createdOps) {
                    try {
                        const profile = await this.profileCache.getProfile(op.author);

                        const embed = createSkeetEmbed({
                            text: op.record.text,
                            uri: await convertAtUriToBskyUri(op.uri, did =>
                                this.profileCache.getProfile(did).then(p => p.handle)
                            ),
                            authorHandle: profile.handle,
                            authorUrl: makeProfileLink(profile.handle),
                            createdAt: new Date(op.record.createdAt),
                            authorIconUrl: profile.avatar,
                            authorName: profile.name,
                        });

                        const user = await this.db.trackedUser.findUnique({
                            where: {
                                did: op.author,
                            },
                        });

                        if (!user) {
                            logger.error("User not found in DB");
                            continue;
                        }

                        const configs = await this.db.trackingConfig.findMany({
                            select: {
                                filterHashtag: true,
                                showReposts: true,

                                channel: true,
                            },
                            where: {
                                userId: user.id,
                            },
                        });

                        for (const config of configs) {
                            try {
                                if (
                                    config.filterHashtag &&
                                    !op.record.text.includes(config.filterHashtag)
                                ) {
                                    continue;
                                }

                                const dsChannel = await this.getValidDiscordChannel(
                                    config.channel.channelId
                                );

                                await dsChannel.send({ embeds: [embed] });
                            } catch (e) {
                                logger.error(e, "Error sending embed");
                            }
                        }
                    } catch (e) {
                        logger.error(e, "Error processing op");
                    }
                }
            } catch (e) {
                logger.error(e, "Error processing event");
            }
        };

        this.firehose.run(3000);

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
    }) {
        const db = args.tx ?? this.db;
        await db.trackingConfig.upsert({
            create: {
                channelId: args.channelId,
                userId: args.userId,
                filterHashtag: args?.hashtag ?? undefined,
                showReposts: args?.showReposts ?? false,
                addedByDiscordUserId: args.addedByDiscordUserId,
            },
            update: {
                filterHashtag: args?.hashtag ?? null,
                showReposts: args?.showReposts ?? false,
                ...(args.addedByDiscordUserId != null
                    ? { addedByDiscordUserId: args.addedByDiscordUserId }
                    : {}),
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

        const permissions = await channel.permissionsFor(this.discord.user!);

        if (
            permissions == null ||
            permissions.has(PermissionsBitField.Flags.SendMessages) === false
        ) {
            throw new Error("Channel does not have send messages permission");
        }

        return channel;
    }

    async getChannelStatus(channelId: string) {
        const users = await this.getTrackedUsersOnChannel(channelId);

        const userList = users.map(user => user.handle).join(", ");

        const msg = [
            `Skeet Poster is online!`,
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
}) {
    const embed = new EmbedBuilder()
        .setTitle(`${data.authorHandle} skeeted`)
        .setURL(data.uri)
        .setAuthor({
            name: data.authorName ?? data.authorHandle,
            iconURL: data.authorIconUrl,
            url: data.authorUrl,
        })
        .setDescription(data.text)
        .setFooter({ text: "Skeet Poster by @maloo.ski" })
        .setTimestamp(new Date(data.createdAt));

    return embed;
}
