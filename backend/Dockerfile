FROM php:8.0-apache

RUN apt-get update \
    && apt-get install -y libzip-dev zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer require firebase/php-jwt

RUN docker-php-ext-install mysqli && a2enmod rewrite

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

COPY . .

EXPOSE 80
