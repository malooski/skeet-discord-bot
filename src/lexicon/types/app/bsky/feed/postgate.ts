/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface Record {
    createdAt: string;
    /** Reference (AT-URI) to the post record. */
    post: string;
    /** List of AT-URIs embedding this post that the author has detached from. */
    detachedEmbeddingUris?: string[];
    embeddingRules?: (DisableRule | { $type: string; [k: string]: unknown })[];
    [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.feed.postgate#main" || v.$type === "app.bsky.feed.postgate")
    );
}

export function validateRecord(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.postgate#main", v);
}

/** Disables embedding of this post. */
export interface DisableRule {
    [k: string]: unknown;
}

export function isDisableRule(v: unknown): v is DisableRule {
    return isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.feed.postgate#disableRule";
}

export function validateDisableRule(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.postgate#disableRule", v);
}
