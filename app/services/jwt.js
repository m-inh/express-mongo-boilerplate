'use strict';

const jwt = require('jsonwebtoken');

exports.generateAccessToken = (payload, secret) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, {algorithm: 'HS256'}, function(err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}
