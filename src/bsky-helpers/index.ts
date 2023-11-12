import { AppBskyFeedDefs } from "@atproto/api";
import { HandleResolver } from "@atproto/identity";
import { toDid } from "@maljs/bsky-helpers";

/**
 * Formats a Blue Sky URI for a post
 * @param args
 * @returns
 */
export function formatBskyPostUri(handle: string, postHash: string): string {
    return `https://bsky.app/profile/${handle}/post/${postHash}`;
}

const AT_URI_REGEX = /at:\/\/([A-Za-z0-9\.\-_~:]+)(\/[A-Za-z0-9\.\/]+)?/i;

export function parseAtUri(uri: string) {
    const match = AT_URI_REGEX.exec(uri.trim());
    if (match == null) {
        throw new Error("Invalid URI");
    }

    const authority = match[1];
    const path = match[2];

    return {
        authority,
        path,
    };
}

export function getPostViewText(post: AppBskyFeedDefs.PostView): string {
    const record = post.record as any;
    return record?.text ?? "";
}

export function makeProfileLink(handle: string) {
    return `https://bsky.app/profile/${handle}`;
}

export async function convertAtUriToBskyUri(
    uri: string,
    handleGetter: (did: string) => Promise<string>
) {
    const parsed = parseAtUri(uri);

    let handle: string;
    const did = toDid;
    if (did != null) {
        handle = await handleGetter(parsed.authority);
    } else {
        handle = parsed.authority;
    }

    const postHash = parsed.path.split("/").at(-1)!;
    return formatBskyPostUri(handle ?? parsed.authority, postHash);
}
