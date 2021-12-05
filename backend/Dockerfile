FROM php:8.0-apache

RUN apt-get update \
    && apt-get install -y libzip-dev zip
RUN docker-php-ext-install mysqli && a2enmod rewrite

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

COPY . .

EXPOSE 80
