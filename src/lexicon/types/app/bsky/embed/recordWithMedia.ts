/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyEmbedExternal from "./external";
import type * as AppBskyEmbedImages from "./images";
import type * as AppBskyEmbedRecord from "./record";
import type * as AppBskyEmbedVideo from "./video";

export interface Main {
    record: AppBskyEmbedRecord.Main;
    media:
        | AppBskyEmbedImages.Main
        | AppBskyEmbedVideo.Main
        | AppBskyEmbedExternal.Main
        | { $type: string; [k: string]: unknown };
    [k: string]: unknown;
}

export function isMain(v: unknown): v is Main {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.embed.recordWithMedia#main" ||
            v.$type === "app.bsky.embed.recordWithMedia")
    );
}

export function validateMain(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.embed.recordWithMedia#main", v);
}

export interface View {
    record: AppBskyEmbedRecord.View;
    media:
        | AppBskyEmbedImages.View
        | AppBskyEmbedVideo.View
        | AppBskyEmbedExternal.View
        | { $type: string; [k: string]: unknown };
    [k: string]: unknown;
}

export function isView(v: unknown): v is View {
    return isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.embed.recordWithMedia#view";
}

export function validateView(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.embed.recordWithMedia#view", v);
}
