/**
 * GENERATED CODE - DO NOT MODIFY
 */
import type { BlobRef, ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import type * as AppBskyRichtextFacet from "../richtext/facet";
import type * as AppBskyGraphDefs from "./defs";

export interface Record {
    purpose: AppBskyGraphDefs.ListPurpose;
    /** Display name for list; can not be empty. */
    name: string;
    description?: string;
    descriptionFacets?: AppBskyRichtextFacet.Main[];
    avatar?: BlobRef;
    labels?: ComAtprotoLabelDefs.SelfLabels | { $type: string; [k: string]: unknown };
    createdAt: string;
    [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.graph.list#main" || v.$type === "app.bsky.graph.list")
    );
}

export function validateRecord(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.graph.list#main", v);
}
