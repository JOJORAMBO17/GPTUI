FROM node:alpine as base
RUN apk update && \
  apk upgrade && \
  apk add --no-cache tzdata git openssh && \
  cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  apk del tzdata && \
  npm i -g npm@latest && \
  npm i -g pnpm

FROM base as builder
WORKDIR /var/www
RUN pnpm create vite vite --template vue-ts && \
  cd vite && \
  pnpm install &&\
  pnpm config set store-dir /root/.local/share/pnpm/store/v3 --global

FROM builder as dev
WORKDIR /var/www/vite
COPY . .
CMD [ "pnpm", "run", "dev" ]
