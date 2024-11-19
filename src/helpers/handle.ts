import type { DidResolver } from "@atproto/identity";
import type { Tagged } from "type-fest";

/**
 * A handle is a string that identifies a resource.
 */
export type Handle = Tagged<string, "Handle">;

const HANDLE_REGEX = /^([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]+$/;

/**
 * Converts a string to a handle.
 * @param s The string to convert.
 * @returns The handle, or null if the string is not a valid handle.
 */
export function toHandle(s: string): Handle | null {
    const match = HANDLE_REGEX.exec(s);
    if (!match) return null;

    return s as Handle;
}

export async function fetchHandle(didResolver: DidResolver, did: string): Promise<string | null> {
    const profile = await didResolver.resolve(did);
    // handle comes back as `at://handle`;
    if (!profile) return null;

    return profile.alsoKnownAs?.[0].split("@")[0] ?? null;
}
