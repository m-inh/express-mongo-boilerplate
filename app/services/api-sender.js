'use strict';

const request = require('request');

function postJSON(url, payload) {
  return new Promise((resolve, reject) => {
    request({
        url: url,
        method: "POST",
        json: true,
        body: payload
    }, function (err, response, body){
      if (err) return reject(err);

      resolve(body);
    });
  });
}

function get(url) {
  return new Promise((resolve, reject) => {
    request({
        url: url,
        method: "GET"
    }, function (err, response, body){
      if (err) return reject(err);

      resolve(JSON.parse(body));
    });
  });
}

module.exports.postJSON = postJSON;
module.exports.get = get;
