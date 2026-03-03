FROM node:20

WORKDIR /nextjs

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]