const express = require('express');
const compression = require('compression');

const app = express()
  .use(compression())
  .use(express.static(__dirname + '/public'))
  .listen(3000);
