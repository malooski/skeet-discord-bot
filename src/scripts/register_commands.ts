import * as dotenv from "dotenv";
dotenv.config();

import { SkeetPoster } from "../skeet_poster";
import SkeetCommand from "../commands/skeet";
import { logger } from "../logger";
import { expectEnvExists } from "../helpers/env";

const guildId = expectEnvExists("DISCORD_GUILD_ID");
async function main() {
    logger.info("Running register commands script!");

    const app = new SkeetPoster();
    app.registerCommand(SkeetCommand(app));

    await app.initialize();
    await app.pushCommandsToGuild(guildId);

    await app.dispose();

    process.exit(0);
}

main();
