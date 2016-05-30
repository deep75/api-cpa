FROM node:argon

# Install app dependencies
RUN npm install pm2 -g

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD api-cpa /usr/src/app
ADD start /usr/src/app
RUN chmod 755 /usr/src/app/start
CMD ["/usr/src/app/start"]

EXPOSE 3004
