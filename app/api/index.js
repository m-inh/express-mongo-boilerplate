'use strict';

const api = require('express').Router();
let user = require('./user');

module.exports = (config, service, middleware) => {
  api.use('/users', user(config, service, middleware));

  api.get('/', (req, res) => {
    res.json({'msg': 'Hello ;)'});
  });

  return api;
};
