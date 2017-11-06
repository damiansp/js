var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {title: 'Welcome', message: 'Hello, World!'});
});

app.get('/espanol', function(req, res) {
    res.render('index', {title: 'Benvenidos', message: 'Hola, todo el mundo!'});
});

var server = app.listen(8000, function() {});
