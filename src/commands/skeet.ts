import { type Did, toDid, toHashtag } from "@maljs/bsky-helpers";
import {
    type AutocompleteInteraction,
    type ChatInputCommandInteraction,
    SlashCommandBuilder,
} from "discord.js";
import type { DiscordCommandDefinition } from ".";
import { logErr } from "../helpers/error";
import { fetchHandle, toHandle } from "../helpers/handle";
import { logger } from "../logger";
import type { SkeetPoster } from "../skeet_poster";

// /skeet track <handle>
// /skeet untrack <handle>

export default function SkeetCommand(app: SkeetPoster): DiscordCommandDefinition {
    return {
        data: new SlashCommandBuilder()
            .setName("skeet")
            .setDescription("Skeet commands")
            .addSubcommand((subcommand) =>
                subcommand
                    .setName("track")
                    .setDescription("Track a BlueSky's skeets in this channel.")
                    .addStringOption((option) =>
                        option
                            .setName("handle")
                            .setDescription("BlueSky handle")
                            .setRequired(true)
                            .setAutocomplete(true),
                    )
                    .addBooleanOption((option) =>
                        option
                            .setName("reposts")
                            .setDescription("Include reposts?")
                            .setRequired(false),
                    )
                    .addStringOption((option) =>
                        option
                            .setName("hashtag")
                            .setDescription("Include posts only with this hashtag"),
                    )
                    .addBooleanOption((option) =>
                        option.setName("replies").setDescription("Include replies?"),
                    ),
            )
            .addSubcommand((subcommand) =>
                subcommand
                    .setName("untrack")
                    .setDescription("Untrack a BlueSky's skeets in this channel.")
                    .addStringOption((option) =>
                        option
                            .setName("handle")
                            .setDescription("BlueSky handle")
                            .setAutocomplete(true),
                    ),
            )
            .addSubcommand((subcommand) =>
                subcommand.setName("status").setDescription("Show status"),
            ),
        async autocomplete(interaction: AutocompleteInteraction) {
            try {
                const focusedOption = interaction.options.getFocused(true);
                const subcommand = interaction.options.getSubcommand(true);

                let choices: string[] = [];

                if (subcommand === "track") {
                    if (focusedOption.name === "handle") {
                        if (focusedOption.value.length > 3) {
                            try {
                                const searchedResult = await app.agent.searchActorsTypeahead({
                                    q: focusedOption.value,
                                    limit: 5,
                                });

                                choices = searchedResult.data.actors.map((actor) => actor.handle);
                            } catch (e) {
                                logger.error(e, "Error searching actors");
                            }
                        }
                    }
                } else if (subcommand === "untrack") {
                    if (focusedOption.name === "handle") {
                        try {
                            const trackedDids = await app.getTrackedDidsOnChannel(
                                interaction.channelId,
                            );

                            const handles = await Promise.all(
                                trackedDids.map((did) => fetchHandle(app.didResolver, did)),
                            );
                            choices = handles.filter((h) => h != null).map((h) => h);
                        } catch (e) {
                            logger.error(e, "Error searching actors");
                        }
                    }
                }

                await interaction.respond(
                    choices.map((choice) => ({ name: choice, value: choice })),
                );
            } catch (e) {
                logger.error(e, "Error executing command");
                await interaction.respond([]);
            }
        },
        async execute(interaction: ChatInputCommandInteraction) {
            try {
                if (interaction.options.getSubcommand() === "track") {
                    if (!interaction.channel) {
                        await interaction.reply("Invalid channel");
                        return;
                    }

                    await app.assertDiscordUserGuildAdmin(
                        interaction.user.id,
                        interaction.channel.id,
                    );

                    const handleRaw = interaction.options.getString("handle") ?? "";
                    console.log("handleRaw", handleRaw);

                    const handle = toHandle(handleRaw);
                    if (handle === null) {
                        await interaction.reply(`Invalid handle. Don't use an '@'.`);
                        return;
                    }

                    const showReposts = interaction.options.getBoolean("show-reposts") ?? false;
                    const includeReplies = interaction.options.getBoolean("replies") ?? false;
                    const rawHashtag = interaction.options.getString("hashtag") ?? undefined;

                    const hashtag = rawHashtag !== undefined ? toHashtag(rawHashtag) : undefined;
                    if (hashtag === null) {
                        await interaction.reply("Invalid hashtag");
                        return;
                    }

                    const did = await app.handleResolver.resolve(handle);

                    await app.addTracking({
                        did: did as Did,
                        channelId: interaction.channelId,
                        showReposts,
                        hashtag,
                        addedByDiscordUserId: interaction.user.id,
                        includeReplies,
                    });
                    await interaction.reply(`Tracking ${handle} in this channel.`);

                    return;
                }

                if (interaction.options.getSubcommand() === "untrack") {
                    if (!interaction.channel) {
                        await interaction.reply("Invalid channel");
                        return;
                    }

                    await app.assertDiscordUserGuildAdmin(
                        interaction.user.id,
                        interaction.channel.id,
                    );

                    const handleRaw = interaction.options.getString("handle") ?? "";
                    console.log("handleRaw", handleRaw);
                    const handle = toHandle(handleRaw);
                    if (handle === null) {
                        await interaction.reply(`Invalid handle. Don't use an '@'.`);
                        return;
                    }

                    const did = await app.handleResolver.resolve(handle);

                    if (!did) {
                        await interaction.reply(`Invalid DID for ${handle}`);
                        return;
                    }

                    await app.removeTracking({
                        did,
                        channelId: interaction.channelId,
                    });
                    await interaction.reply(`Untracking ${handle} in this channel.`);

                    return;
                }

                if (interaction.options.getSubcommand() === "status") {
                    const status = await app.getChannelStatus(interaction.channelId).catch((e) => {
                        logger.error(e, "Error getting channel status");
                        return "Error getting channel status";
                    });
                    await interaction.reply(status).catch(logErr("Error replying"));
                }
            } catch (e) {
                logger.error(e, "Error executing command");
                await interaction.reply(`Error executing command: ${e}`);
            }
        },
    };
}
