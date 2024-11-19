import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyGraphDefs from "./defs";

export interface QueryParams {
    /** Primary account requesting relationships for. */
    actor: string;
    /** List of 'other' accounts to be related back to the primary. */
    others?: string[];
}

export type InputSchema = undefined;

export interface OutputSchema {
    actor?: string;
    relationships: (
        | AppBskyGraphDefs.Relationship
        | AppBskyGraphDefs.NotFoundActor
        | { $type: string; [k: string]: unknown }
    )[];
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

export class ActorNotFoundError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "ActorNotFound") return new ActorNotFoundError(e);
    }

    return e;
}
