FROM node:20

WORKDIR /backend-express

COPY package*.json ./

RUN npm config set fetch-timeout 3000000
RUN npm install


COPY . .

EXPOSE 8800

CMD [ "npm","run","start"]