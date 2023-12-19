import * as dotenv from "dotenv";
dotenv.config();

import { expectEnvExists, expectIntEnvExists } from "./helpers/env";

export const IS_DEV_MODE = process.env.NODE_ENV === "development";

export const DISCORD_TOKEN = expectEnvExists("DISCORD_TOKEN");
export const DISCORD_CLIENT_ID = expectEnvExists("DISCORD_CLIENT_ID")!;
export const DISCORD_ADMIN_ID = expectEnvExists("DISCORD_ADMIN_ID")!;

export const BSKY_IDENTIFIER = expectEnvExists("BSKY_IDENTIFIER")!;
export const BSKY_PASSWORD = expectEnvExists("BSKY_PASSWORD")!;

export const BSKY_FIREHOSE_URL = process.env.BSKY_FIREHOSE_URL ?? "wss://bsky.network";

export const PROFILE_CACHE_MAX = expectIntEnvExists("PROFILE_CACHE_MAX", 100);
export const PROFILE_CACHE_TTL = expectIntEnvExists("PROFILE_CACHE_TTL", 1000 * 60 * 60);
