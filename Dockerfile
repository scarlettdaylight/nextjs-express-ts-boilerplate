# syntax=docker/dockerfile:experimental
FROM node:12-alpine

ENV PORT=3000

# Setting working directory. All the path will be relative to WORKDIR
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .

# Installing dependencies
RUN --mount=type=ssh,id=github yarn

# Building app
RUN yarn build:prod

EXPOSE $PORT

# Running the app
CMD ["yarn","serve"]
