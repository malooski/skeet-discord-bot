# Skeet Poster

Posts your bluesky skeets to Discord

## How to add to your server

Go to the following link and select your server from the dropdown menu

[Add Bot To Server](https://discord.com/oauth2/authorize?client_id=1171491704814182482&scope=bot&permissions=2147485696)

Note: You must have the Manage Server permission in the server to add a bot to that server

## Usage

### Track a user's skeets

Run the following in a channel to track a user's skeets.

```
/skeet track [handle] [show-reposts] [hashtag]
```

### Untrack a user's skeets

Run the following in a channel to untrack a user's skeets.

> Note: You must be in the same channel that you used to track the user's skeets.

```
/skeet untrack [handle]
```

## Running The Service

You don't need to run the bot yourself; however, if you want to, you can.

### Prerequisites

-   Node.JS v18 (LTS)

###

### Environment Variables

Create a `.env` file in the root.

```
BSKY_IDENTIFIER="yourusername.bsky.social"
BSKY_PASSWORD="your password"

DISCORD_CLIENT_ID="discord client id"
DISCORD_TOKEN="discord bot token"
DISCORD_GUILD_ID="discord guild id"

DATABASE_URL="file:./dev.db"
```
