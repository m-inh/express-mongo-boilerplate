'use strict';

const config = require('./config.json');
const main = require('./app/main');

main(config)
  .catch(err => {
    console.error(err);
    process.exit(0);
  });
