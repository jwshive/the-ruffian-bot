FROM node:latest

WORKDIR /the-ruffian-bot

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:production"]

# docker build -t the-ruffian-bot:production --file Dockerfile .
