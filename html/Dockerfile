# pull app từ hub docker

FROM --platform=linux/amd64 nginx

WORKDIR /usr/share/nginx/html

# copy tất cả source ngang cấp với Dockerfile vào thư mục chỉ định ở container 
COPY . .

EXPOSE 80


# docker build . -t img-html

# docker build ./Downloads/html -t img-html

# docker run -d -p 3002:80 --name cons-html img-html

