FROM node:23-slim

COPY package.json package-lock.json ./
COPY ./pages ./pages
COPY ./controllers ./controllers
COPY ./links.mjs ./
RUN npm ci
COPY ./server.mjs ./

CMD [ "npm", "start" ]