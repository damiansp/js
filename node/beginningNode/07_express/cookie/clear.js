const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
  .use(cookieParser())
  .use('/toggle', function(req, res) {
      if (req.cookies.name) {
        res.clearCookie('name');
        res.end('name cookie cleared! Was: ' + req.cookies.name);
      } else {
        res.cookie('name', 'foo');
        res.end('name cookie set!');
      }
  }).listen(3000);
