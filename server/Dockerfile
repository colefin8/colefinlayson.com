FROM node:23-slim

COPY package.json package-lock.json ./
COPY ./pages ./pages
RUN npm ci
COPY ./server.mjs ./

CMD [ "npm", "start" ]