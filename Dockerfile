# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json and yarn.lock
COPY yarn.lock ./
COPY package.json ./

# install app dependencies
RUN yarn install

# enviroment variables
ENV NODE_ENV=development
ENV EXTEND_ESLINT=false
ENV PORT=3000

# expose the port 3000
EXPOSE 3000

# start app
CMD yarn start
