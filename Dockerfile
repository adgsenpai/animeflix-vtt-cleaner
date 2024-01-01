# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages including TypeScript and ts-node
RUN npm install
RUN npm install -g typescript ts-node

# Bundle app source inside Docker image
COPY . .

# Transpile TypeScript to JavaScript
RUN tsc

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using ts-node
CMD [ "ts-node", "server.ts" ]
