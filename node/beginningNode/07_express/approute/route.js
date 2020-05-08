const express = require('express');

let app = express();

app.route('/')
  .all(function(req, res, next) {
    res.write('all\n');
    next();
  }).get(function(req, res, next) {
    res.end('get');
  }).put(function(req, res, next) {
    res.end('put');
  }).post(function(req, res, next) {
    res.end('post');
  }).delete(function(req, res, next) {
    re.end('delete');
  }).listen(3000);
