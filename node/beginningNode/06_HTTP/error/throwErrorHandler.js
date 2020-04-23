var connect = require('connect');

connect()
  .use(function(req, res, next) { throw new Error('An error has occurred!') })
  .use(function(req, res, next) { res.end('I never get called!') })
  .use(function(err, req, res, next) {
      console.log('Error handled:', err.message);
      res.writeHead(500);
      res.end('Server error!');      
  }).listen(3000);
