import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ToolsOzoneSetDefs from "./defs";

export interface QueryParams {
    limit?: number;
    cursor?: string;
    namePrefix?: string;
    sortBy?: "name" | "createdAt" | "updatedAt";
    /** Defaults to ascending order of name field. */
    sortDirection?: "asc" | "desc";
}

export type InputSchema = undefined;

export interface OutputSchema {
    sets: ToolsOzoneSetDefs.SetView[];
    cursor?: string;
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
