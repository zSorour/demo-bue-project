# specify Base Image
FROM node:19.2-alpine

# specify the working directory of the nodejs backend server in the container image
WORKDIR /app

# copy all files to the working directory.
# note: a .dockerignore file will be used to ignore files that should not be copied such as node_modules
COPY ./ ./

# install all dependencies
RUN npm install

# expose port 5000
EXPOSE 5000

# run the server
ENTRYPOINT ["npm", "start"]
