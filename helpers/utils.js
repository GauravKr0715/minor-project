const logger = require('./logger');
const jwt = require('jsonwebtoken');

let getToken = function (user) {
  let token = jwt.sign(user, process.env.TOKEN_SECRET);

  logger.info(`User created -> ${JSON.stringify(user)}`);
  return token;
};

module.exports = {
  getToken
}