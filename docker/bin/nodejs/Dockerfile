# debian 9
FROM node:10

# create app folder
RUN mkdir /app

# install nodemon globally
RUN npm install -g nodemon

# install PM2 globally
RUN npm i -g pm2

# install PM2 log rotation
RUN pm2 install pm2-logrotate

# set path to app folder
WORKDIR /app

# install dependencies
RUN npm install

# expose docker port
EXPOSE 3000
