FROM node:alpine AS builder

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install -g

COPY . .

RUN npm cache clean –force

RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/default.conf



