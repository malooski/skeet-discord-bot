import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyActorDefs from "../actor/defs";

export interface QueryParams {
    /** AT-URI of the subject (eg, a post record). */
    uri: string;
    /** CID of the subject record (aka, specific version of record), to filter likes. */
    cid?: string;
    limit?: number;
    cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    uri: string;
    cid?: string;
    cursor?: string;
    likes: Like[];
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

export interface Like {
    indexedAt: string;
    createdAt: string;
    actor: AppBskyActorDefs.ProfileView;
    [k: string]: unknown;
}

export function isLike(v: unknown): v is Like {
    return isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.feed.getLikes#like";
}

export function validateLike(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.getLikes#like", v);
}
