import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyGraphDefs from "./defs";

export interface QueryParams {
    /** Reference (AT-URI) of the list record to hydrate. */
    list: string;
    limit?: number;
    cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    cursor?: string;
    list: AppBskyGraphDefs.ListView;
    items: AppBskyGraphDefs.ListItemView[];
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
