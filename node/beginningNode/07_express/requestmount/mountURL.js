const express = require('express');

express()
  .use('/home', function(req, res, next) {
      console.log('first:', req.url); // GET /home => "first: /"
      next();
  }).use(function(req, res, next) {
      console.log('second:', req.url); // GET /home => "second: /home"
      next();
  }).listen(3000);
