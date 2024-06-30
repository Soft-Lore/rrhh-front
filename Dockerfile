# Stage 1: Build Angular app
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve Angular app using NGINX for production
FROM nginx:1.20 as ngx
COPY --from=builder /app/dist/rrhh-front/browser /usr/share/nginx/html
COPY /nginx.conf.template /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/cache/nginx/client_temp
RUN chown -R nginx:nginx /var/cache/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Development stage: Run Angular app with live reload
FROM node:18-alpine as dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "run", "dev"]
