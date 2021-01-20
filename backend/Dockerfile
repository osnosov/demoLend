FROM node:14-alpine

WORKDIR /src

COPY package*.json ./

RUN npm ci --only=production

COPY  . .
