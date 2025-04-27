ARG IMAGE_NAME=node:20.17.1-alpine

FROM ${IMAGE_NAME} AS base

WORKDIR /node-app
COPY ./ ./

RUN npm ci
RUN npm run test
RUN npm run build

FROM ${IMAGE_NAME} AS final

ENV NODE_ENV production
ARG PORT=3000
ENV PORT=${PORT}
USER node

WORKDIR /node-app
COPY --from=base /node-app/dist/ /node-app
EXPOSE ${PORT}

ENTRYPOINT ["node", "/node-app/index.js"]