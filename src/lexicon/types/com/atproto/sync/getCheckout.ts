import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface QueryParams {
    /** The DID of the repo. */
    did: string;
}

export type InputSchema = undefined;

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: Uint8Array;
}

export function toKnownErr(e: any) {
    return e;
}
