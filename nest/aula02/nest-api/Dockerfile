FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@7.6.0

ENV DOCKERIZE_VERSION v8.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USE node

WORKDIR /home/node/app
