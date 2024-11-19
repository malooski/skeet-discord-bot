import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyVideoDefs from "./defs";

export type QueryParams = {};

export type InputSchema = string | Uint8Array | Blob;

export interface OutputSchema {
    jobStatus: AppBskyVideoDefs.JobStatus;
    [k: string]: unknown;
}

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
    qp?: QueryParams;
    encoding?: "video/mp4";
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}

export function toKnownErr(e: any) {
    return e;
}
