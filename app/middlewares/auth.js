'use strict';

let jwt = require('jsonwebtoken');

module.exports = (config, service) => {
  return (req, res, next) => {
    let access_token = req.query.access_token;

    jwt.verify(access_token, config.SERVER_SECRET, function(err, decoded) {
      if (err) {
        let unauthorizedRes = service.response().fail('Unauthorized', 401);
        return res.json(unauthorizedRes);
      } else {
        req.payload = decoded;
        next();
      }
    });
  };
}
