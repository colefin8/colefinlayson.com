FROM nginx:stable-alpine3.20-perl
COPY ./public ./etc/nginx/static/public
COPY ./src ./etc/nginx/static/src
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf