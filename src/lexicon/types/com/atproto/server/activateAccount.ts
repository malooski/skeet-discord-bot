import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export type QueryParams = {};

export type InputSchema = undefined;

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
    qp?: QueryParams;
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
}

export function toKnownErr(e: any) {
    return e;
}
