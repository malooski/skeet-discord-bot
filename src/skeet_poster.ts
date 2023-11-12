import { Client, EmbedBuilder, GatewayIntentBits, PermissionsBitField } from "discord.js";

import { BskyAgent } from "@atproto/api";
import { DidResolver, HandleResolver, MemoryCache } from "@atproto/identity";
import { convertAtUriToBskyUri, makeProfileLink } from "./bsky-helpers";
import { Firehose, getOpsByType } from "./bsky-helpers/firehose";
import { isCommit } from "./bsky-helpers/lexicon/types/com/atproto/sync/subscribeRepos";
import { logger } from "./logger";
import { ProfileCache, ProfileData } from "./profile_cache";
import { DiscordCommandDefinition } from "./commands";
import { Did, Hashtag } from "@maljs/bsky-helpers";
import { REST, Routes } from "discord.js";
import { BSKY_IDENTIFIER, BSKY_PASSWORD, DISCORD_CLIENT_ID, DISCORD_TOKEN } from "./env";
import { groupBy, uniq } from "lodash";
import { toMap, toMapArray } from "./helpers/map";
import { PrismaClient } from "@prisma/client";

export class SkeetPoster {
    agent = new BskyAgent({
        service: "https://bsky.social",
    });
    db = new PrismaClient();
    trackedDids = new Set<string>();
    firehose = new Firehose("wss://bsky.social");
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

    commands: DiscordCommandDefinition[] = [];

    constructor() {}

    async pushCommandsToGuild(guildId: string) {
        logger.info(
            {
                guildId: guildId,
                commands: this.commands.length,
            },
            `Started refreshing slash commands to Guild.`
        );
        const commands = this.commands.map(command => command.data.toJSON());
        await this.rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, guildId), {
            body: commands,
        });

        logger.info(`Successfully reloaded slash commands.`);
    }

    registerCommand(command: DiscordCommandDefinition) {
        this.commands.push(command);
        this.discord.on("interactionCreate", async interaction => {
            if (interaction.isChatInputCommand()) {
                if (interaction.commandName !== command.data.name) return;

                try {
                    await command.execute(interaction);
                } catch (err) {
                    logger.error(err, "Command error");
                    await interaction.reply({
                        content: "An error occured",
                        ephemeral: true,
                    });
                }
            }

            if (interaction.isAutocomplete()) {
                if (interaction.commandName !== command.data.name) return;
                if (!command.autocomplete) return;

                try {
                    await command.autocomplete(interaction);
                } catch (err) {
                    logger.error(err, "Autocomplete error");
                    await interaction.respond([]);
                }
            }
        });
    }

    async addTracking(
        did: Did,
        channelId: string,
        options?: { showReposts?: boolean; hashtag?: Hashtag }
    ) {
        const user = await this.db.trackedUser.upsert({
            create: {
                did,
            },
            update: {},
            where: {
                did,
            },
        });

        const channel = await this.db.discordChannel.upsert({
            create: {
                channelId: channelId,
            },
            update: {},
            where: {
                channelId: channelId,
            },
        });

        await this.db.trackingConfig.upsert({
            create: {
                channelId: channel.id,
                userId: user.id,
                showReposts: options?.showReposts,
                filterHashtag: options?.hashtag,
            },
            update: {
                showReposts: options?.showReposts,
                filterHashtag: options?.hashtag ?? null,
            },
            where: {
                userId_channelId: {
                    channelId: channel.id,
                    userId: user.id,
                },
            },
        });

        this.trackedDids.add(did);

        logger.info(
            {
                did,
                channelId: channelId,
                hashtag: options?.hashtag,
                showReposts: options?.showReposts,
            },
            `Added tracking`
        );
    }

    async removeTracking(did: Did, channelId: string) {
        await this.db.trackingConfig.deleteMany({
            where: {
                channel: {
                    channelId: channelId,
                },
                user: {
                    did: did,
                },
            },
        });

        // Check if user has any more configs
        const channelsWithUsers = await this.db.trackingConfig.findMany({
            where: {
                user: {
                    did: did,
                },
            },
        });

        if (channelsWithUsers.length === 0) {
            await this.db.trackedUser.delete({
                where: {
                    did: did,
                },
            });
            this.trackedDids.delete(did);
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
    }

    async initialize() {
        logger.info("Initializing SkeetPoster");
        this.discord.application?.commands.set(this.commands.map(c => c.data));

        logger.info("Registering commands");
        const commands = this.commands.map(command => command.data.toJSON());
        await this.rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });
    }

    async run() {
        await this.db.$connect();
        await this.agent.login({
            identifier: BSKY_IDENTIFIER,
            password: BSKY_PASSWORD,
        });

        this.discord.on("ready", foo => {
            logger.info("Discord client ready");
        });

        this.discord.on("guildAvailable", async guild => {
            logger.info("Guild available", guild.name);
            await this.pushCommandsToGuild(guild.id);
        });

        await this.discord.login(DISCORD_TOKEN);

        // Refresh trackedDids every 15min
        await this.refreshTrackedDids();
        setInterval(() => {}, 1000 * 60 * 60);

        // Listen on firehose
        this.firehose.onEvent = async evt => {
            if (!isCommit(evt)) return;
            const ops = await getOpsByType(evt);

            const createdOps = ops.posts.creates.filter(op => this.trackedDids.has(op.author));
            const repostedOps = ops.reposts.creates.filter(op => this.trackedDids.has(op.author));

            await this.profileCache.getProfiles([
                ...createdOps.map(op => op.author),
                ...repostedOps.map(op => op.author),
            ]); // Seed cache with profiles.

            for (const op of createdOps) {
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
                    where: {
                        userId: user.id,
                    },
                });

                const channels = await this.db.discordChannel.findMany({
                    where: {
                        id: {
                            in: configs.map(config => config.channelId),
                        },
                    },
                });

                for (const config of configs) {
                    if (config.filterHashtag && !op.record.text.includes(config.filterHashtag)) {
                        continue;
                    }

                    const channel = channels.find(channel => channel.id === config.channelId);
                    if (!channel) {
                        logger.error("Channel not found in DB");
                        continue;
                    }

                    const discordChannel = await this.discord.channels.fetch(channel.channelId);
                    if (!discordChannel) {
                        logger.error("Channel not found in Discord");
                        continue;
                    }

                    if (!discordChannel.isTextBased()) {
                        logger.error("Channel is not text based");
                        continue;
                    }

                    await discordChannel.send({ embeds: [embed] });
                }
            }
        };

        this.firehose.run();
        this.announceOnline();
    }

    async dispose() {
        await this.db.$disconnect();
        await this.discord.destroy();
    }

    async getValidChannel(channelId: string) {
        const channel = await this.discord.channels.fetch(channelId);
        if (!channel) {
            return null;
        }

        if (!channel.isTextBased()) {
            return null;
        }

        return channel;
    }

    async pruneChannel(channelId: string) {
        logger.info({ channelId }, "Pruning channel");

        const channel = await this.db.discordChannel.findFirst({
            where: {
                channelId: channelId,
            },
        });

        if (!channel) {
            return;
        }

        await this.db.trackingConfig.deleteMany({
            where: {
                channelId: channel.id,
            },
        });

        await this.db.discordChannel.delete({
            where: {
                channelId: channelId,
            },
        });

        await this.refreshTrackedDids();
    }

    async isUserAllowedToManage(userId: string, channelId: string) {
        const channel = await this.discord.channels.fetch(channelId);

        if (!channel) {
            return false;
        }

        if (!channel.isTextBased()) {
            return false;
        }

        if (channel.isDMBased()) {
            channel.send(`You can't use this command in a DM.`);
            return false;
        }

        const member = await channel.guild.members.fetch(userId);

        if (!member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {
            return false;
        }

        return true;
    }

    async announceOnline() {
        const configs = await this.db.trackingConfig.findMany({
            select: {
                channelId: true,
                channel: true,
                user: true,
            },
        });

        const groupedChannels = toMapArray(
            configs,
            c => c.channel.channelId,
            c => c.user.did
        );

        for (const [channelId, userDids] of groupedChannels) {
            const discordChannel = await this.discord.channels.fetch(channelId);
            if (!discordChannel) {
                logger.error(
                    {
                        channelId: channelId,
                    },
                    "Channel not found in Discord"
                );
                continue;
            }

            if (!discordChannel.isTextBased()) {
                logger.error(
                    {
                        channelId: channelId,
                    },
                    "Channel is not text based"
                );
                continue;
            }

            const users = await this.profileCache.getProfiles(uniq(userDids));

            const userList = users.map(user => user.handle).join(", ");
            await discordChannel.send(
                [
                    `Skeet Poster is now online!`,
                    `Tracking ${userDids.length} users in this channel: ${userList}`,
                ].join("\n")
            );
        }
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
