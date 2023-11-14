import { PrismaClient } from "@prisma/client";
import { ITXClientDenyList } from "@prisma/client/runtime/library";

export type PrismaConnector = Omit<PrismaClient, ITXClientDenyList>;
