import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js";

import { BskyAgent } from "@atproto/api";
import { DidResolver, HandleResolver, MemoryCache } from "@atproto/identity";
import { convertAtUriToBskyUri, makeProfileLink } from "./bsky-helpers";
import { Firehose, getOpsByType } from "./bsky-helpers/firehose";
import { isCommit } from "./bsky-helpers/lexicon/types/com/atproto/sync/subscribeRepos";
import { PrismaClient } from "./generated/db";
import { logger } from "./logger";
import { ProfileCache, ProfileData } from "./profile_cache";
import { DiscordCommandDefinition } from "./commands";

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

    commands: DiscordCommandDefinition[] = [];

    constructor() {}

    registerCommand(command: DiscordCommandDefinition) {
        this.commands.push(command);
        this.discord.on("interactionCreate", async interaction => {
            if (interaction.isChatInputCommand()) {
                if (interaction.commandName !== command.data.name) return;
                await command.execute(interaction);
            }

            if (interaction.isAutocomplete()) {
                if (interaction.commandName !== command.data.name) return;
                if (!command.autocomplete) return;

                await command.autocomplete(interaction);
            }
        });
    }

    async addTracking(did: string, channelId: string, options?: { showReposts?: boolean }) {
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
            },
            update: {
                showReposts: options?.showReposts,
            },
            where: {
                userId_channelId: {
                    channelId: channel.id,
                    userId: user.id,
                },
            },
        });

        this.trackedDids.add(did);
    }

    async removeTracking(did: string, channelId: string) {
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
        const allUsers = await this.db.trackedUser.findMany({
            select: {
                did: true,
            },
        });

        this.trackedDids.clear();
        for (const user of allUsers) {
            this.trackedDids.add(user.did);
        }
    }

    async run() {
        // Initialize stuff
        await this.db.$connect();
        await this.agent.login({
            identifier: process.env.BSKY_IDENTIFIER ?? "INVALID",
            password: process.env.BSKY_PASSWORD ?? "INVALID",
        });

        this.discord.on("ready", foo => {
            logger.info("Discord client ready");

            this.discord.application?.commands.set(this.commands.map(c => c.data));
        });

        await this.discord.login(process.env.DISCORD_TOKEN ?? "INVALID TOKEN");

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
