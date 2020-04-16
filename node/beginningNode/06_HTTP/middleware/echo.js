const connect = require('connect');

function echo(req, res, next) {
  req.pipe(res);
}

connect().use(echo).listen(3000);

