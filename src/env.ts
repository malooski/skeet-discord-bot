import * as dotenv from "dotenv";
dotenv.config();

import { expectEnvExists, expectIntEnvExists } from "./helpers/env";

export const DISCORD_TOKEN = expectEnvExists("DISCORD_TOKEN");
export const DISCORD_CLIENT_ID = expectEnvExists("DISCORD_CLIENT_ID")!;

export const BSKY_IDENTIFIER = expectEnvExists("BSKY_IDENTIFIER")!;
export const BSKY_PASSWORD = expectEnvExists("BSKY_PASSWORD")!;

export const PROFILE_CACHE_MAX = expectIntEnvExists("PROFILE_CACHE_MAX", 1000);
export const PROFILE_CACHE_TTL = expectIntEnvExists("PROFILE_CACHE_TTL", 1000 * 60 * 60 * 24);
