const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
  .use(cookieParser('My super secret sign key'))
  .use('/toggle', function(req, res) {
      if (req.signedCookies.name) {
        res.clearCookie('name');
        res.end('Name cookie cleared! Was: ' + req.signedCookies.name);
      } else {
        res.cookie('name', 'foo', {signed: true});
        res.end('Name cookie set!');
      }
  }).listen(3000);
