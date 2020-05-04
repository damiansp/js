const express = require('express');
const timeout = require('connect-timeout');

const app = express()
  .use('/api', timeout(5000), function(req, res, next) { /* nothing */; })
  .listen(3000);
