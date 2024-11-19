import { BlobRef, type ValidationResult } from "@atproto/lexicon";
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
    appview?: ServiceConfig;
    pds?: ServiceConfig;
    blobDivert?: ServiceConfig;
    chat?: ServiceConfig;
    viewer?: ViewerConfig;
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

export interface ServiceConfig {
    url?: string;
    [k: string]: unknown;
}

export function isServiceConfig(v: unknown): v is ServiceConfig {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "tools.ozone.server.getConfig#serviceConfig"
    );
}

export function validateServiceConfig(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.server.getConfig#serviceConfig", v);
}

export interface ViewerConfig {
    role?:
        | "tools.ozone.team.defs#roleAdmin"
        | "tools.ozone.team.defs#roleModerator"
        | "tools.ozone.team.defs#roleTriage"
        | (string & {});
    [k: string]: unknown;
}

export function isViewerConfig(v: unknown): v is ViewerConfig {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "tools.ozone.server.getConfig#viewerConfig"
    );
}

export function validateViewerConfig(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.server.getConfig#viewerConfig", v);
}
