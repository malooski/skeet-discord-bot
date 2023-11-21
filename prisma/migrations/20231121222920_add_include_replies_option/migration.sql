-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TrackingConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "showReposts" BOOLEAN NOT NULL DEFAULT false,
    "filterHashtag" TEXT,
    "includeReplies" BOOLEAN NOT NULL DEFAULT false,
    "addedByDiscordUserId" TEXT,
    CONSTRAINT "TrackingConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TrackedUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TrackingConfig_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "DiscordChannel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TrackingConfig" ("addedByDiscordUserId", "channelId", "filterHashtag", "id", "showReposts", "userId") SELECT "addedByDiscordUserId", "channelId", "filterHashtag", "id", "showReposts", "userId" FROM "TrackingConfig";
DROP TABLE "TrackingConfig";
ALTER TABLE "new_TrackingConfig" RENAME TO "TrackingConfig";
CREATE UNIQUE INDEX "TrackingConfig_userId_channelId_key" ON "TrackingConfig"("userId", "channelId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
