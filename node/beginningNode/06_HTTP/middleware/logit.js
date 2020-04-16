const util = require('util');
const connect = require('connect');

// simple logging middleware
function logit(req, res, next) {
  util.log(util.format('Request received: %s, %s', req.method, req.url));
  next();
}

connect().use(logit).listen(3000);
