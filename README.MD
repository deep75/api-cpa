API CPA
=======


* Execution : `docker run -d --name api-cpa -p 80:3004 mcas/api-cpa`

Dépendance
----------

 * [NodeJS]
 * [pm2] : `npm install pm2 -g`

Commandes
---------

 * `cd data && npm install && cd ../api && npm install && cd ../` to install the dependencies
 * `pm2 start apps.json` to start the server
 * `pm2 stop apps.json` to stop the server

You can get the API here [localhost:3004](http://localhost:3004)

[NodeJS]: https://nodejs.org/en/
[pm2]: http://pm2.keymetrics.io/
