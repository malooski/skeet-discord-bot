# The instructions for the first stage
FROM node

WORKDIR /app

ARG DATABASE_URL="file:./db/dev.db"

RUN chown -R node:node /app

USER node

COPY --chown=node:node package*.json ./ 
RUN npm install


ENV DATABASE_URL="file:./db/dev.db"
COPY --chown=node:node . .


VOLUME [ "/app/prisma/db" ]
RUN npm run build:prod

ENV NODE_ENV=production

CMD ["./start.sh"]
