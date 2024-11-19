import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface QueryParams {
    /** The handle or DID of the repo. */
    repo: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    handle: string;
    did: string;
    /** The complete DID document for this account. */
    didDoc: {};
    /** List of all the collections (NSIDs) for which this repo contains at least one record. */
    collections: string[];
    /** Indicates if handle is currently valid (resolves bi-directionally) */
    handleIsCorrect: boolean;
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
