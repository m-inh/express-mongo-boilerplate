'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

let _ = require('lodash');
let db = require('../../app/database');
let config = require('../config.json');

let User = require('../../app/models/user');

function cleanDb() {
  return User.remove({});
}

describe('User', () => {
  before(() => {
    db.connect(config)
      .then(() => cleanDb());
  });

  after(() => {
    return db.close();
  });

  describe('#save()', () => {
    it('should save without error', () => {
      var user = new User({name: 'Nguyen Tien Minh'});
      return user.save();
    });
  });


});
