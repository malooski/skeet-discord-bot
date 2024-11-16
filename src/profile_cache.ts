import type AtpAgent from "@atproto/api";
import { DidResolver, type HandleResolver } from "@atproto/identity";
import type { Handle } from "@maljs/bsky-helpers";
import { chunk, uniq } from "lodash";
import { LRUCache } from "lru-cache";
import { ENV_VARS } from "./env";

export interface ProfileData {
    did: string;
    handle: string;
    name?: string;
    avatar?: string;
}

export class ProfileCache {
    profileCache = new LRUCache<string, ProfileData>({
        max: ENV_VARS.PROFILE_CACHE_MAX,
        ttl: ENV_VARS.PROFILE_CACHE_TTL,
    });

    agent: AtpAgent;

    handleResolver: HandleResolver;

    constructor(agent: AtpAgent, handleResolver: HandleResolver) {
        this.agent = agent;
        this.handleResolver = handleResolver;
    }

    async fetchProfiles(dids: string[]): Promise<ProfileData[]> {
        const result: ProfileData[] = [];
        if (dids.length === 0) return result;

        const didGroups = chunk(dids, 100);

        for (const group of didGroups) {
            const profiles = await this.agent.getProfiles({
                actors: group,
            });

            for (const profile of profiles.data.profiles) {
                const data: ProfileData = {
                    did: profile.did,
                    handle: profile.handle,
                    avatar: profile.avatar,
                    name: profile.displayName,
                };

                this.profileCache.set(data.did, data);

                result.push(data);
            }
        }

        return result;
    }

    async getProfiles(dids: string[]) {
        const myDids = uniq(dids);
        const missing: string[] = [];
        const found: ProfileData[] = [];

        for (const did of myDids) {
            const cached = this.profileCache.get(did);
            if (cached) {
                found.push(cached);
            } else {
                missing.push(did);
            }
        }

        for (const profile of await this.fetchProfiles(missing)) {
            found.push(profile);
        }

        return found;
    }

    async getProfile(did: string): Promise<ProfileData> {
        const found = this.profileCache.get(did);
        if (found) return found;

        const profiles = await this.fetchProfiles([did]);
        if (profiles.length === 0) throw new Error("profile not found");

        return profiles[0];
    }

    async getProfileByHandle(handle: Handle): Promise<ProfileData> {
        const did = await this.handleResolver.resolve(handle);
        if (!did) throw new Error("did not found");
        return this.getProfile(did);
    }
}
