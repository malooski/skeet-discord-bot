import SkeetCommand from "./commands/skeet";
import { ENV_VARS, IS_DEV_MODE } from "./env";
import { logger } from "./logger";
import { SkeetPoster } from "./skeet_poster";

async function main() {
    if (IS_DEV_MODE) {
        logger.warn("Running in dev mode. This is not recommended for production use.");
    }

    const app = new SkeetPoster();

    app.registerCommand(SkeetCommand(app));

    await app.initialize();

    app.run();

    logger.info(
        `Add to your server with https://discord.com/api/oauth2/authorize?client_id=${ENV_VARS.DISCORD_CLIENT_ID}&permissions=2147485696&scope=bot`,
    );
}

main();
