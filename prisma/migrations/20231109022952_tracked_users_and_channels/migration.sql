-- CreateTable
CREATE TABLE "TrackedUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "did" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DiscordChannel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "channelId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TrackingConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "showReposts" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "TrackingConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TrackedUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TrackingConfig_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "DiscordChannel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackedUser_did_key" ON "TrackedUser"("did");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordChannel_channelId_key" ON "DiscordChannel"("channelId");

-- CreateIndex
CREATE UNIQUE INDEX "TrackingConfig_userId_channelId_key" ON "TrackingConfig"("userId", "channelId");
