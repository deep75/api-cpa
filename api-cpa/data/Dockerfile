FROM node:5.7

RUN mkdir -p /srv/apps

EXPOSE 3000
ADD package.json /srv/apps
WORKDIR /srv/apps
RUN npm install --production

ADD ./ /srv/apps

CMD npm start
