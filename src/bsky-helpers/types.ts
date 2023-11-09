import { Record as PostRecord } from "./lexicon/types/app/bsky/feed/post";
import { Record as RepostRecord } from "./lexicon/types/app/bsky/feed/repost";
import { Record as LikeRecord } from "./lexicon/types/app/bsky/feed/like";
import { Record as FollowRecord } from "./lexicon/types/app/bsky/graph/follow";

export type OperationsByType = {
    posts: Operations<PostRecord>;
    reposts: Operations<RepostRecord>;
    likes: Operations<LikeRecord>;
    follows: Operations<FollowRecord>;
};

export type Operations<T = Record<string, unknown>> = {
    creates: CreateOp<T>[];
    deletes: DeleteOp[];
};

export type CreateOp<T> = {
    uri: string;
    cid: string;
    author: string;
    record: T;
};

export type DeleteOp = {
    uri: string;
};
