import type { ITXClientDenyList } from "@prisma/client/runtime/library";
import type { PrismaClient } from "../generated/prisma";

export type PrismaConnector = Omit<PrismaClient, ITXClientDenyList>;
