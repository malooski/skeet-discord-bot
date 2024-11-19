import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export type QueryParams = {};

export interface InputSchema {
    token: string;
    password: string;
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
}

export class ExpiredTokenError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export class InvalidTokenError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "ExpiredToken") return new ExpiredTokenError(e);
        if (e.error === "InvalidToken") return new InvalidTokenError(e);
    }

    return e;
}
