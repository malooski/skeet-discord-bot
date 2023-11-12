# The instructions for the first stage
FROM node:alpine

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --chown=node:node package*.json ./ 
RUN npm install

COPY --chown=node:node . .

ENV NODE_ENV=production
ENV DATABASE_URL="file:./db/dev.db"

VOLUME [ "/app/prisma/db" ]
RUN npm run db:generate
RUN npm run check

CMD ["./start.sh"]
