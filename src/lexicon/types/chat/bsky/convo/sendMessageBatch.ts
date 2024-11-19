import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ChatBskyConvoDefs from "./defs";

export type QueryParams = {};

export interface InputSchema {
    items: BatchItem[];
    [k: string]: unknown;
}

export interface OutputSchema {
    items: ChatBskyConvoDefs.MessageView[];
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

export interface BatchItem {
    convoId: string;
    message: ChatBskyConvoDefs.MessageInput;
    [k: string]: unknown;
}

export function isBatchItem(v: unknown): v is BatchItem {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "chat.bsky.convo.sendMessageBatch#batchItem"
    );
}

export function validateBatchItem(v: unknown): ValidationResult {
    return lexicons.validate("chat.bsky.convo.sendMessageBatch#batchItem", v);
}
