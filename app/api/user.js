'use strict';

const api = require('express').Router();
let _ = require('lodash');
let utils = require('../utils');

module.exports = (config, service, middleware) => {
  let mongoose = require('mongoose');
  let User = mongoose.model('User');

  // api.use('/', middleware.auth);

  api.get('/:user_id', function (req, res) {
    let user_id = req.params.user_id;

    User.findByFbId(user_id)
      .then(user => {
        if (!_.isEmpty(user)) {
          let dataRes = {
            fb_id: user.get('fb_id'),
            name: user.get('name')
          };

          let objRes = service.response().success(dataRes);
          res.json(objRes);
        } else {
          let objRes = service.response().fail('User not found!');
          res.json(objRes);
        }
      })
      .catch(err => {
        console.error('/:user_id, findByFbId', err);
        let objRes = service.response().undefined();
        res.json(objRes);
      });
  });

  return api;
}
