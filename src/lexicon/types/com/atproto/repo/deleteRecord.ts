import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoRepoDefs from "./defs";

export type QueryParams = {};

export interface InputSchema {
    /** The handle or DID of the repo (aka, current account). */
    repo: string;
    /** The NSID of the record collection. */
    collection: string;
    /** The Record Key. */
    rkey: string;
    /** Compare and swap with the previous record by CID. */
    swapRecord?: string;
    /** Compare and swap with the previous commit by CID. */
    swapCommit?: string;
    [k: string]: unknown;
}

export interface OutputSchema {
    commit?: ComAtprotoRepoDefs.CommitMeta;
    [k: string]: unknown;
}

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
    qp?: QueryParams;
    encoding?: "application/json";
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}

export class InvalidSwapError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidSwap") return new InvalidSwapError(e);
    }

    return e;
}
