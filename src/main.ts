import * as dotenv from "dotenv";
dotenv.config();

import SkeetCommand from "./commands/skeet";
import { SkeetPoster } from "./skeet_poster";

async function main() {
    const app = new SkeetPoster();

    app.registerCommand(SkeetCommand(app));

    app.run();
}

main();
