FROM node:latest

WORKDIR /the-ruffian-bot

COPY package*.json ./

RUN npm install

RUN mv /etc/localtime /etc/localtime.bkup

RUN ln -s /usr/share/zoneinfo/America/Indiana/Indianapolis /etc/localtime

RUN echo "America/Indiana/Indianapolis" > /etc/timezone

RUN dpkg-reconfigure -f noninteractive tzdata

COPY . .

CMD ["npm", "run", "start:production"]

# docker build -t the-ruffian-bot:production --file Dockerfile .
