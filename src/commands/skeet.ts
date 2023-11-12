import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    AutocompleteInteraction,
} from "discord.js";
import { SkeetPoster } from "../skeet_poster";
import { DiscordCommandDefinition } from ".";
import { logger } from "../logger";
import { toDid, toHashtag } from "@maljs/bsky-helpers";

// /skeet track <handle>
// /skeet untrack <handle>

export default function SkeetCommand(app: SkeetPoster): DiscordCommandDefinition {
    return {
        data: new SlashCommandBuilder()
            .setName("skeet")
            .setDescription("Skeet commands")
            .addSubcommand(subcommand =>
                subcommand
                    .setName("track")
                    .setDescription("Track a BlueSky's skeets in this channel.")
                    .addStringOption(option =>
                        option
                            .setName("handle")
                            .setDescription("BlueSky handle")
                            .setRequired(true)
                            .setAutocomplete(true)
                    )
                    .addBooleanOption(option =>
                        option
                            .setName("reposts")
                            .setDescription("Include reposts?")
                            .setRequired(false)
                    )
                    .addStringOption(option =>
                        option
                            .setName("hashtag")
                            .setDescription("Include posts only with this hashtag")
                    )
            )
            .addSubcommand(subcommand =>
                subcommand
                    .setName("untrack")
                    .setDescription("Untrack a BlueSky's skeets in this channel.")
                    .addStringOption(option =>
                        option
                            .setName("handle")
                            .setDescription("BlueSky handle")
                            .setAutocomplete(true)
                    )
            ),
        async autocomplete(interaction: AutocompleteInteraction) {
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

                            choices = searchedResult.data.actors.map(actor => actor.handle);
                        } catch (e) {
                            logger.error("Error searching actors", e);
                        }
                    }
                }
            } else if (subcommand === "untrack") {
                if (focusedOption.name === "handle") {
                    try {
                        const trackedUsers = await app.getTrackedUsersOnChannel(
                            interaction.channelId
                        );

                        choices = trackedUsers.map(user => user.handle);
                    } catch (e) {
                        logger.error("Error searching actors", e);
                    }
                }
            }

            await interaction.respond(choices.map(choice => ({ name: choice, value: choice })));
        },
        async execute(interaction: ChatInputCommandInteraction) {
            if (interaction.options.getSubcommand() === "track") {
                if (!interaction.channel) {
                    await interaction.reply(`Invalid channel`);
                    return;
                }

                const isAllowed = await app.isUserAllowedToManage(
                    interaction.user.id,
                    interaction.channel.id
                );
                if (!isAllowed) {
                    await interaction.reply(`You are not allowed to manage this channel.`);
                    return;
                }

                const showReposts = interaction.options.getBoolean("show-reposts") ?? false;
                const handle = interaction.options.getString("handle") ?? "";
                const rawHashtag = interaction.options.getString("hashtag") ?? undefined;

                const hashtag = rawHashtag !== undefined ? toHashtag(rawHashtag) : undefined;
                if (hashtag === null) {
                    await interaction.reply(`Invalid hashtag`);
                    return;
                }

                const profile = await app.profileCache.getProfileByHandle(handle);
                const did = toDid(profile.did);
                if (!did) {
                    await interaction.reply(`Invalid DID for ${handle}`);
                    return;
                }

                await app.addTracking(did, interaction.channelId, { showReposts, hashtag });
                await interaction.reply(`Tracking ${handle} in this channel.`);

                return;
            }

            if (interaction.options.getSubcommand() === "untrack") {
                if (!interaction.channel) {
                    await interaction.reply(`Invalid channel`);
                    return;
                }

                const isAllowed = await app.isUserAllowedToManage(
                    interaction.user.id,
                    interaction.channel.id
                );
                if (!isAllowed) {
                    await interaction.reply(`You are not allowed to manage this channel.`);
                    return;
                }

                const handle = interaction.options.getString("handle") ?? "";

                const profile = await app.profileCache.getProfileByHandle(handle);
                const did = toDid(profile.did);

                if (!did) {
                    await interaction.reply(`Invalid DID for ${handle}`);
                    return;
                }

                await app.removeTracking(did, interaction.channelId);
                await interaction.reply(`Untracking ${handle} in this channel.`);

                return;
            }
        },
    };
}
