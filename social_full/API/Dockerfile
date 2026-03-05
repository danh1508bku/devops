FROM node:20

WORKDIR /backend-express

COPY package*.json ./

RUN yarn config set network-timeout 3000000
RUN yarn install


COPY . .

EXPOSE 8800

CMD [ "yarn","start"]