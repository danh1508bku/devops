# cài nodejs
FROM node:22

WORKDIR /nodejs

COPY package.json .

RUN yarn config set network-timeout 3000000
# chạy lệnh tạm thời
RUN yarn install

COPY prisma ./prisma/
RUN yarn prisma generate

COPY . .

EXPOSE 8088

# chạy nền
CMD ["node","server.js"]

# docker build . -t img-node
# docker run -d -p 8088:8088 --name cons-node img-node