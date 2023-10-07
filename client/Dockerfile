FROM node:17-alpine

WORKDIR /mylibrary

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]