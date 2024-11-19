/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface CommitMeta {
    cid: string;
    rev: string;
    [k: string]: unknown;
}

export function isCommitMeta(v: unknown): v is CommitMeta {
    return isObj(v) && hasProp(v, "$type") && v.$type === "com.atproto.repo.defs#commitMeta";
}

export function validateCommitMeta(v: unknown): ValidationResult {
    return lexicons.validate("com.atproto.repo.defs#commitMeta", v);
}
