FROM node:13.1.0-alpine3.10

ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 80
CMD node index.js
