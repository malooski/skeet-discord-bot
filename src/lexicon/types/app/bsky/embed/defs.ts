/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

/** width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit. */
export interface AspectRatio {
    width: number;
    height: number;
    [k: string]: unknown;
}

export function isAspectRatio(v: unknown): v is AspectRatio {
    return isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.embed.defs#aspectRatio";
}

export function validateAspectRatio(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.embed.defs#aspectRatio", v);
}
