import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyActorDefs from "./defs";

export interface QueryParams {
    /** DEPRECATED: use 'q' instead. */
    term?: string;
    /** Search query prefix; not a full query string. */
    q?: string;
    limit?: number;
}

export type InputSchema = undefined;

export interface OutputSchema {
    actors: AppBskyActorDefs.ProfileViewBasic[];
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
