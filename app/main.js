'use strict';

const express = require('express');

// load dependencies
let service = require('./services');
let api = require('./api');
let db = require('./database');

// boostrap app
let app = express();

module.exports = (config) => {
  return new Promise((resolve, reject) => {
    db.connect(config)
      .then(
        (msg) => {
          console.log(msg);

          let middleware = require('./middlewares')(config, service);

          app.use('/api', api(config, service, middleware));

          app.listen(config.PORT, function (err) {
            if (err) throw err;

            console.log('Server is listening on port ' + config.PORT);
            resolve();
          });
        }
      )
      .catch(reject);
  });
};
