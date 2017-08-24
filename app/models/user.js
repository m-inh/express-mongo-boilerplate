'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String
  }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
