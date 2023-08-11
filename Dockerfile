FROM node:alpine as base
WORKDIR /var/www
RUN apk update && \
  apk upgrade && \
  apk add --no-cache tzdata git openssh && \
  cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  apk del tzdata && \
  npm i -g npm@latest && \
  npm i -g pnpm && \
  pnpm create vite vite --template vue-ts

FROM base as dev
WORKDIR /var/www/vite
RUN pnpm install
COPY . .
CMD [ "pnpm", "run", "dev" ]
