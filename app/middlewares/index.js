'use strict';

module.exports = (config, service) => {
  return {
    auth: require('./auth')(config, service)
  };
};
