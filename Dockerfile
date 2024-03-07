FROM node:18
WORKDIR /pharmacy
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 7000

CMD npm start
