var connect = require('connect');

connect()
  .use(function(req, res, next) { next(new Error('An error has occurred!')) })
  .use(function(req, res, next) { res.end('I never get called!') })
  .use(function(err, req, res, next) {
      // Log the error
      console.log('Error handled:', err.message);
      console.log('Stacktrace:', err.stack);
      // Inform client
      res.writeHead(500);
      res.end('Unable to process the request');
      
  }).listen(3000);
