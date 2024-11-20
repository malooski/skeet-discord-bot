import * as dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

import { expectEnvExists, expectIntEnvExists } from "./helpers/env";

const ENV_VARS_SCHEMA = z.object({
    NODE_ENV: z.enum(["development", "production"]),
    DISCORD_TOKEN: z.string(),
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_ADMIN_ID: z.string(),
    DISCORD_CHANNEL_ID_DEBUG: z.string().optional(),

    BSKY_IDENTIFIER: z.string(),
    BSKY_PASSWORD: z.string(),
    PROFILE_CACHE_MAX: z.coerce.number().default(100),
    PROFILE_CACHE_TTL: z.coerce.number().default(1000 * 60 * 60),

    BSKY_FIREHOSE_URL: z.string().default("wss://bsky.network"),
});

export const ENV_VARS = ENV_VARS_SCHEMA.parse(process.env);
export const IS_DEV_MODE = process.env.NODE_ENV === "development";
