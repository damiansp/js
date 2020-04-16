const connect = require('connect');

function echo(req, res, next) {
  req.pipe(res);
}

connect()
  .use('/echo', echo)
  .use(function(req, res) { res.end('OMG!'); })
  .listen(3000);
