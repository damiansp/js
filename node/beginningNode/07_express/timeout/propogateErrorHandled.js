const express = require('express');
const timeout = require('connect-timeout');

const app = express()
  .use(timeout(5000))
  .use(function(req, res, next) {
      // sim DB action taking 2s
      setTimeout(function() { next(); }, 2000)
  }).use(holdOnTimedOut)
  .use(function(req, res, next) {
      res.end('Done'); // will never get called
  }).listen(3000);


function haltOnTimedOut(req, res, next) { if (!req.timedout) next(); }
