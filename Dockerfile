FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG port
ARG title
ARG name

ENV TITLE=$title
ENV PORT=$port
ENV NAME=$name

CMD [ "npm", "start" ]