FROM node:14.17-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]



# FROM postgres:latest

# ENV POSTGRES_USER postgres
# ENV POSTGRES_PASSWORD root
# ENV POSTGRES_DB node_db

# COPY init.sql /docker-entrypoint-initdb.d/

# EXPOSE 5432

# CMD [ "node", "app.js" ]