'use strict';

const request = require('request');
const crypto = require('crypto');
const StandardError = require('standard-error');

const idpToHash = function(idp)
{
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(idp))
    .digest('hex');
};

const apirService =
{
  getEndOfNir: function(idp)
  {
    const idpHash = idpToHash(idp);

    return new Promise(function(resolve, reject) {
      request
        .get({
            url: "http://apir.herokuapp.com/v1/endOfNir/" + idpHash
          }, (err, response, body) => {
            if(err) {
              return reject(err);
            }
            if (response.statusCode === 400) {
              let error400 = new StandardError("Invalid hash", {code: 400});
              return reject(error400);
            }
            if (response.statusCode === 404) {
              let error404 = new StandardError("Unknown endOfNir", {code: 404});
              return reject(error404);
            }
            if (response.statusCode === 500) {
              let error500 = new StandardError("Server error", {code: 500});
              return reject(error500);
            }
            return resolve(JSON.parse(body));
          })
      });
  },
  putEndOfNir: function(idp, endOfNir)
  {
    const idpHash = idpToHash(idp);

    return new Promise(function(resolve, reject) {
      request
        .put({
            url: "http://apir.herokuapp.com/v1/endOfNir/" + idpHash,
            body: { endOfNir: endOfNir },
            json: true
          }, (err, response, body) => {
            if(err) {
              return reject(err);
            }
            if (response.statusCode === 400) {
              let error400 = new StandardError(response.body.message, {code: 400});
              return reject(error400);
            }
            if (response.statusCode === 500) {
              let error500 = new StandardError("Server error", {code: 500});
              return reject(error500);
            }
            return resolve(JSON.parse(body));
          })
      });
  }
}

module.exports = apirService
