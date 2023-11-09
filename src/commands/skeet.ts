import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    AutocompleteInteraction,
} from "discord.js";
import { SkeetPoster } from "../skeet_poster";
import { DiscordCommandDefinition } from ".";
import { logger } from "../logger";

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
                            .setName("show-reposts")
                            .setDescription("Show reposts")
                            .setRequired(false)
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
                        const searchedResult = await app.agent.searchActorsTypeahead({
                            q: focusedOption.value,
                            limit: 5,
                        });

                        logger.info(`Search result: ${JSON.stringify(searchedResult)}`);

                        choices = searchedResult.data.actors.map(actor => actor.handle);
                    }
                }
            } else if (subcommand === "untrack") {
                if (focusedOption.name === "handle") {
                    const trackedUsers = await app.getTrackedUsersOnChannel(interaction.channelId);

                    choices = trackedUsers.map(user => user.handle);
                }
            }

            await interaction.respond(choices.map(choice => ({ name: choice, value: choice })));
        },
        async execute(interaction: ChatInputCommandInteraction) {
            logger.debug("Skeet command received");
            if (interaction.options.getSubcommand() === "track") {
                const showReposts = interaction.options.getBoolean("show-reposts") ?? false;
                const handle = interaction.options.getString("handle") ?? "";

                const profile = await app.profileCache.getProfileByHandle(handle);

                await app.addTracking(profile.did, interaction.channelId, { showReposts });
                await interaction.reply(`Tracking ${handle} in this channel.`);

                return;
            }

            if (interaction.options.getSubcommand() === "untrack") {
                const handle = interaction.options.getString("handle") ?? "";

                const profile = await app.profileCache.getProfileByHandle(handle);

                await app.removeTracking(profile.did, interaction.channelId);
                await interaction.reply(`Untracking ${handle} in this channel.`);

                return;
            }
        },
    };
}
