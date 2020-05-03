const express = require('express');
const cookieSess = require('cookie-session');


const app = express()
  .use(cookieSess({keys: ['my super secret sign key']}))
  .use('/home', function(req, res) {
      if (req.session.views) { req.session.views++; }
      else { req.session.views = 1; }
      res.end('Total views: ' + req.session.views);
  }).use('/reset', function(req, res) {
      delete req.session.views;
      res.end('Cleared all views');
  }).listen(3000);
