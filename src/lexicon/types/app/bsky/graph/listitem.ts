/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface Record {
    /** The account which is included on the list. */
    subject: string;
    /** Reference (AT-URI) to the list record (app.bsky.graph.list). */
    list: string;
    createdAt: string;
    [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.graph.listitem#main" || v.$type === "app.bsky.graph.listitem")
    );
}

export function validateRecord(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.graph.listitem#main", v);
}
