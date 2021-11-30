FROM node:lts-alpine

WORKDIR /var/www/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "watch"]
