import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export type QueryParams = {};

export interface InputSchema {
    codeCount: number;
    useCount: number;
    forAccounts?: string[];
    [k: string]: unknown;
}

export interface OutputSchema {
    codes: AccountCodes[];
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

export function toKnownErr(e: any) {
    return e;
}

export interface AccountCodes {
    account: string;
    codes: string[];
    [k: string]: unknown;
}

export function isAccountCodes(v: unknown): v is AccountCodes {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        v.$type === "com.atproto.server.createInviteCodes#accountCodes"
    );
}

export function validateAccountCodes(v: unknown): ValidationResult {
    return lexicons.validate("com.atproto.server.createInviteCodes#accountCodes", v);
}
