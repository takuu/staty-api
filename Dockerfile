# our base image
FROM alpine:latest

# Update

# Install base packages
RUN apk update 
RUN apk upgrade 
RUN apk add curl wget bash gcc make libc-dev python g++

RUN apk add --update nodejs
RUN mongorestore -d staty mongodata/staty/

# Install app dependencies
COPY package.json package.json
RUN  npm install

# Bundle app source
COPY . .

EXPOSE 1337
CMD ["npm", "run", "dev"]
