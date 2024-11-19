import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface QueryParams {
    limit?: number;
    cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    cursor?: string;
    blobs: RecordBlob[];
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

export interface RecordBlob {
    cid: string;
    recordUri: string;
    [k: string]: unknown;
}

export function isRecordBlob(v: unknown): v is RecordBlob {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        v.$type === "com.atproto.repo.listMissingBlobs#recordBlob"
    );
}

export function validateRecordBlob(v: unknown): ValidationResult {
    return lexicons.validate("com.atproto.repo.listMissingBlobs#recordBlob", v);
}
