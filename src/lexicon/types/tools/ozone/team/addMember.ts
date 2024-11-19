import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ToolsOzoneTeamDefs from "./defs";

export type QueryParams = {};

export interface InputSchema {
    did: string;
    role:
        | "tools.ozone.team.defs#roleAdmin"
        | "tools.ozone.team.defs#roleModerator"
        | "tools.ozone.team.defs#roleTriage"
        | (string & {});
    [k: string]: unknown;
}

export type OutputSchema = ToolsOzoneTeamDefs.Member;

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

export class MemberAlreadyExistsError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "MemberAlreadyExists") return new MemberAlreadyExistsError(e);
    }

    return e;
}
