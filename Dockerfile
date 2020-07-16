FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build:all

ENV NODE_ENV docker
ENV PORT=4000

EXPOSE 4000

CMD [ "npm", "run", "start:prod" ]