
FROM nginx:alpine

COPY dist/ /app
COPY scripts/docker/run-nginx.sh /usr/local/bin
COPY scripts/docker/nginx.conf etc/nginx/conf.d/default.conf.template

EXPOSE 4200
CMD ["/usr/local/bin/run-nginx.sh"]