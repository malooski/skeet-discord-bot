import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoAdminDefs from "../../../com/atproto/admin/defs";
import type * as ToolsOzoneSignatureDefs from "./defs";

export interface QueryParams {
    did: string;
    cursor?: string;
    limit?: number;
}

export type InputSchema = undefined;

export interface OutputSchema {
    cursor?: string;
    accounts: RelatedAccount[];
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

export interface RelatedAccount {
    account: ComAtprotoAdminDefs.AccountView;
    similarities?: ToolsOzoneSignatureDefs.SigDetail[];
    [k: string]: unknown;
}

export function isRelatedAccount(v: unknown): v is RelatedAccount {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        v.$type === "tools.ozone.signature.findRelatedAccounts#relatedAccount"
    );
}

export function validateRelatedAccount(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.signature.findRelatedAccounts#relatedAccount", v);
}
