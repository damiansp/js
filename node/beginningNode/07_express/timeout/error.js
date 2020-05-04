const express = require('express');
const timeout = require('connect-timeout');

const app = express()
  .use(
    '/api',
    timeout(5000),
    function(req, res, next) { ; },
    function(err, req, res, next) {
      if (req.timedout) {
        res.statusCode = 500;
        res.end('Request timed out');
      } else { next(err); }
    }
  ).listen(3000);
