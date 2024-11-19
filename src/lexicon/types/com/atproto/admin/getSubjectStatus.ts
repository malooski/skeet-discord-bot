import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoRepoStrongRef from "../repo/strongRef";
import type * as ComAtprotoAdminDefs from "./defs";

export interface QueryParams {
    did?: string;
    uri?: string;
    blob?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    subject:
        | ComAtprotoAdminDefs.RepoRef
        | ComAtprotoRepoStrongRef.Main
        | ComAtprotoAdminDefs.RepoBlobRef
        | { $type: string; [k: string]: unknown };
    takedown?: ComAtprotoAdminDefs.StatusAttr;
    deactivated?: ComAtprotoAdminDefs.StatusAttr;
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
