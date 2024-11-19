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

export interface OutputSchema {
    accessJwt: string;
    refreshJwt: string;
    handle: string;
    did: string;
    didDoc?: {};
    active?: boolean;
    /** Hosting status of the account. If not specified, then assume 'active'. */
    status?: "takendown" | "suspended" | "deactivated" | (string & {});
    [k: string]: unknown;
}

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
    qp?: QueryParams;
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}

export class AccountTakedownError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "AccountTakedown") return new AccountTakedownError(e);
    }

    return e;
}
