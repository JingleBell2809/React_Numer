FROM node:19-alpine3.16

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 3000

CMD ["npm","start"]