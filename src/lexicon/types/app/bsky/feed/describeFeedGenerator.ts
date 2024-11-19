import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export type QueryParams = {};

export type InputSchema = undefined;

export interface OutputSchema {
    did: string;
    feeds: Feed[];
    links?: Links;
    [k: string]: unknown;
}

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}

export function toKnownErr(e: any) {
    return e;
}

export interface Feed {
    uri: string;
    [k: string]: unknown;
}

export function isFeed(v: unknown): v is Feed {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.feed.describeFeedGenerator#feed"
    );
}

export function validateFeed(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.describeFeedGenerator#feed", v);
}

export interface Links {
    privacyPolicy?: string;
    termsOfService?: string;
    [k: string]: unknown;
}

export function isLinks(v: unknown): v is Links {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.feed.describeFeedGenerator#links"
    );
}

export function validateLinks(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.describeFeedGenerator#links", v);
}
