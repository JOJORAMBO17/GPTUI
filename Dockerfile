FROM node:alpine as base
RUN apk update && \
  apk upgrade && \
  apk add --no-cache tzdata git openssh && \
  cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  apk del tzdata && \
  npm i -g npm@latest && \
  npm i -g pnpm

FROM base as builder
WORKDIR /home/node
RUN pnpm create vite vite --template vue-ts

FROM builder as dev
WORKDIR /home/node/vite
COPY . .
RUN pnpm install
CMD [ "pnpm", "run", "dev" ]
