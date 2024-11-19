/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import type * as AppBskyLabelerDefs from "./defs";

export interface Record {
    policies: AppBskyLabelerDefs.LabelerPolicies;
    labels?: ComAtprotoLabelDefs.SelfLabels | { $type: string; [k: string]: unknown };
    createdAt: string;
    [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.labeler.service#main" || v.$type === "app.bsky.labeler.service")
    );
}

export function validateRecord(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.labeler.service#main", v);
}
