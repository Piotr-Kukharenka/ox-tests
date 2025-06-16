FROM node:20.19.0
ARG REGISTRY_TOKEN
LABEL support=support@ox.security
WORKDIR /home/node/app

CMD [ "node", "dist/main.js" ]
