import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyActorDefs from "../actor/defs";

export interface QueryParams {
    /** Reference (AT-URI) of post record */
    uri: string;
    /** If supplied, filters to reposts of specific version (by CID) of the post record. */
    cid?: string;
    limit?: number;
    cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    uri: string;
    cid?: string;
    cursor?: string;
    repostedBy: AppBskyActorDefs.ProfileView[];
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
