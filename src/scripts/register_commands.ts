import * as dotenv from "dotenv";
dotenv.config();

import { SkeetPoster } from "../skeet_poster";
import SkeetCommand from "../commands/skeet";
import { REST, Routes } from "discord.js";
import { logger } from "../logger";

async function main() {
    logger.info("Running register commands script!");

    const app = new SkeetPoster();
    app.registerCommand(SkeetCommand(app));

    const clientId = process.env.DISCORD_CLIENT_ID!;
    const token = process.env.DISCORD_TOKEN!;
    const guildId = process.env.DISCORD_GUILD_ID!;

    // Construct and prepare an instance of the REST module
    const rest = new REST().setToken(token);

    const commands = app.commands.map(command => command.data.toJSON());
    logger.info(`Commands: ${JSON.stringify(commands)}`);

    console.log(`Started refreshing ${commands.length} application (/) commands.`);
    // The put method is used to fully refresh all commands in the guild with the current set

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    logger.info(`Successfully reloaded ${commands.length} application (/) commands.`);

    app.discord.destroy();

    process.exit(0);
}

main();
