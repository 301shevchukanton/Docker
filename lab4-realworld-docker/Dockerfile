FROM node:alpine

WORKDIR /
COPY package*.json ./
COPY utils ./utils/
COPY models ./models/
COPY configuration ./configuration/
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]
