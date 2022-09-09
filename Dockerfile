FROM node:16 as build
WORKDIR /usr/app/
COPY ./ ./
RUN npm ci && npm run build

FROM nginx:alpine
USER root
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/app/dist /usr/share/nginx/html
EXPOSE 8080
USER 1000
ENTRYPOINT ["nginx", "-g", "daemon off;"]