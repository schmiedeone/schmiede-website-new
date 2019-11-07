FROM node:buster AS build

# LABEL maintainer="andy@schmiede.one"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app
ENV NODE_ENV production

RUN rm -rf .next && npm run build

FROM node:buster

COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/.next /usr/src/app/.next
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build /usr/src/app/public /usr/src/app/public
# COPY --from=build /usr/src/app/index.js /usr/src/app/index.js
# COPY --from=build /usr/src/app/client/index.js /usr/src/app/client/index.js

WORKDIR /usr/src/app
EXPOSE 5000
ENV PORT 5000
CMD ["npm", "run", "start"]
