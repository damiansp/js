const express = require('express');
const timeout = require('connect-timeout');

const app = express()
  .use(timeout(5000))
  .use(function(req, res, next) {
      // sim DB action taking 6s
      setTimeout(function() { next(); }, 6000) 
  }).use(function(req, res, next) {
      res.end('Done'); // ERROR: req already terminated
  }).listen(3000);
