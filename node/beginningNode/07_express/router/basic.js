const express = require('express');
const bodyParser = require('body-parser');

let items = [];

// Create a router
let router = express.Router();
router.use(bodyParser());

// Collection routes
router.route('/')
  .get(function(req, res, next) {
      res.send({status: 'Items found', items: items});
  }).post(function(req, res, next) {
      items.push(req.body);
      res.send({status: 'Item added', itemID: items.length - 1});
  }).put(function(req, res, next) {
      items = req.body;
      res.send({status: 'Items replaced'});
  }).delete(function(req, res, next) {
      items = [];
      res.send({status: 'Items cleared'});
  });

// Item routes
router.route('/:id')
  .get(function(req, res, next) {
      let id = req.params['id'];
      if (id && items[Number(id)]) {
        res.send({status: 'Item found', item: items[Number(id)]});
      } else {
        res.send(404, {status: 'Not found'});
      }
  }).all(function(req, res, next) {
      res.send(501, {status: 'Not implemented'});
  });

// Use router
let app = express().use('/todo', router).listen(3000);
