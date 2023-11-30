FROM node:20 as BUILD_IMAGE
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /
COPY . ./
# install dependencies
RUN yarn install --frozen-lockfile
COPY . .
# build
RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]
