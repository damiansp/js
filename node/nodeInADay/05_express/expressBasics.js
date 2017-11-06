var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello, world!');
});

app.get('/french', function(req, res) {
    res.send('Bonjour, tout le monde!');
});

app.get('/italian', function(req, res) {
    res.send('Buon giorno, tutto il mondo.');
});

app.listen(8000, function() {});
