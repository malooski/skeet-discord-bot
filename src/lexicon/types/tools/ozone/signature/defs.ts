/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface SigDetail {
    property: string;
    value: string;
    [k: string]: unknown;
}

export function isSigDetail(v: unknown): v is SigDetail {
    return isObj(v) && hasProp(v, "$type") && v.$type === "tools.ozone.signature.defs#sigDetail";
}

export function validateSigDetail(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.signature.defs#sigDetail", v);
}
