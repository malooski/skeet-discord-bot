import type {
    AutocompleteInteraction,
    ChatInputCommandInteraction,
    SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

export interface DiscordCommandDefinition {
    data: SlashCommandSubcommandsOnlyBuilder;
    execute(interaction: ChatInputCommandInteraction): Promise<void>;
    autocomplete?(interaction: AutocompleteInteraction): Promise<void>;
}
