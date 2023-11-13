import {
    Client,
    DiscordAPIError,
    EmbedBuilder,
    GatewayIntentBits,
    PermissionsBitField,
    User,
} from "discord.js";

import { BskyAgent } from "@atproto/api";
import { DidResolver, HandleResolver, MemoryCache } from "@atproto/identity";
import { convertAtUriToBskyUri, makeProfileLink } from "./bsky-helpers";
import { Firehose, getOpsByType } from "./bsky-helpers/firehose";
import { isCommit } from "./bsky-helpers/lexicon/types/com/atproto/sync/subscribeRepos";
import { logger } from "./logger";
import { ProfileCache, ProfileData } from "./profile_cache";
import { DiscordCommandDefinition } from "./commands";
import { Did, Hashtag, toHandle } from "@maljs/bsky-helpers";
import { REST, Routes } from "discord.js";
import {
    BSKY_IDENTIFIER,
    BSKY_PASSWORD,
    DISCORD_ADMIN_ID,
    DISCORD_CLIENT_ID,
    DISCORD_TOKEN,
} from "./env";
import { groupBy, uniq } from "lodash";
import { toMap, toMapArray } from "./helpers/map";
import { PrismaClient } from "@prisma/client";
import { P } from "pino";

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
    discordAdmin: User | undefined;

    commands: DiscordCommandDefinition[] = [];

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

    async isDiscordUserGuildAdmin(userId: string, channelId: string) {
        try {
            const channel = await this.assertDbChannelValid(channelId);

            const permissions = await channel.permissionsFor(userId);
            if (!permissions) {
                throw new Error("Permissions not found");
            }

            if (!permissions.has(PermissionsBitField.Flags.Administrator)) {
                throw new Error("Missing Administrator permission");
            }

            return true;
        } catch (e) {
            return false;
        }
    }

    async addTracking(
        did: Did,
        channelId: string,
        options?: { showReposts?: boolean; hashtag?: Hashtag }
    ) {
        const profile = await this.assertBskyUserDidValid(did);
        const user = await this.upsertDbUser(did);
        const discordChannel = await this.assertDbChannelValid(channelId);
        const channel = await this.upsertDbChannel(channelId);

        await this.upsertDbConfig(channel.id, user.id, options);

        this.trackedDids.add(did);
        logger.info(
            {
                handle: profile.handle,
                did,
                guild: discordChannel.guild.name,
                channel: discordChannel.name,
            },
            `Tracking ${profile.handle} (${did}) in '${discordChannel.guild.name}' '${discordChannel.name}]`
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

    async run() {
        this.discord.on("guildAvailable", async guild => {
            logger.info(
                { guildId: guild.id, guildName: guild.name },
                "Guild available",
                guild.name
            );
            await this.pushCommandsToGuild(guild.id);
        });

        // Refresh trackedDids every 15min
        await this.refreshTrackedDids();
        setInterval(() => {
            this.refreshTrackedDids();
        }, 1000 * 60 * 15);

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

    async assertBskyUserDidValid(did: string) {
        try {
            const bskyProfiles = await this.profileCache.fetchProfiles([did]);

            if (bskyProfiles.length === 0) {
                throw new Error("Profile not found");
            }

            return bskyProfiles[0];
        } catch (e) {
            logger.error(e, "Error upserting user");
            await this.pruneUserDid(did);
            throw e;
        }
    }

    async upsertDbUser(did: string) {
        await this.assertBskyUserDidValid(did);

        const user = await this.db.trackedUser.upsert({
            create: {
                did,
            },
            update: {},
            where: {
                did,
            },
        });

        return user;
    }

    async assertDbChannelValid(channelId: string) {
        try {
            const discordChannel = await this.discord.channels.fetch(channelId);
            if (!discordChannel) {
                throw new Error("Channel not found");
            }

            if (!discordChannel.isTextBased()) {
                throw new Error("Channel is not text based");
            }

            if (discordChannel.isDMBased()) {
                throw new Error("Channel is DM based");
            }

            const permissions = await discordChannel.permissionsFor(this.discord.user!);
            if (!permissions) {
                throw new Error("Permissions not found");
            }

            if (!permissions.has(PermissionsBitField.Flags.SendMessages)) {
                throw new Error("Missing SendMessages permission");
            }

            return discordChannel;
        } catch (e) {
            logger.error(e, "Error upserting channel");
            await this.pruneChannel(channelId);
            throw e;
        }
    }

    async upsertDbChannel(channelId: string) {
        await this.assertDbChannelValid(channelId);

        const channel = await this.db.discordChannel.upsert({
            create: {
                channelId: channelId,
            },
            update: {},
            where: {
                channelId: channelId,
            },
        });

        return channel;
    }

    async upsertDbConfig(
        channelId: number,
        userId: number,
        options?: { showReposts?: boolean; hashtag?: string }
    ) {
        await this.db.trackingConfig.upsert({
            create: {
                channelId: channelId,
                userId: userId,
                filterHashtag: options?.hashtag ?? undefined,
                showReposts: options?.showReposts ?? false,
            },
            update: {
                filterHashtag: options?.hashtag ?? null,
                showReposts: options?.showReposts ?? false,
            },
            where: {
                userId_channelId: {
                    channelId: channelId,
                    userId: userId,
                },
            },
        });
    }

    async pruneUserDid(did: string) {
        logger.info({ did }, "Pruning user");

        const user = await this.db.trackedUser.findUnique({
            where: {
                did: did,
            },
        });

        if (!user) {
            return;
        }

        await this.db.trackingConfig.deleteMany({
            where: {
                userId: user.id,
            },
        });

        await this.db.trackedUser.delete({
            where: {
                did: did,
            },
        });

        await this.refreshTrackedDids();
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

    async announceOnline() {
        logger.info("Announcing online");
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
            try {
                const dsChannel = await this.assertDbChannelValid(channelId);
                const users = await this.profileCache.getProfiles(uniq(userDids));

                const userList = users.map(user => user.handle).join(", ");

                await dsChannel.send(
                    [
                        `Skeet Poster is now online!`,
                        `Tracking ${userDids.length} users in this channel: ${userList}`,
                    ].join("\n")
                );
            } catch (e) {
                logger.error(e, "Error announcing online");
            }
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
