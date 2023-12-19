import SkeetCommand from "./commands/skeet";
import { SkeetPoster } from "./skeet_poster";
import { logger } from "./logger";
import { DISCORD_CLIENT_ID, IS_DEV_MODE } from "./env";

async function main() {
    if (IS_DEV_MODE) {
        logger.warn("Running in dev mode. This is not recommended for production use.");
    }

    const app = new SkeetPoster();

    app.registerCommand(SkeetCommand(app));

    await app.initialize();

    app.run();

    logger.info(
        `Add to your server with https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&permissions=2147485696&scope=bot`
    );
}

main();
