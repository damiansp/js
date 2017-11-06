/* To install modules use
 * > npm install express 
 * etc
 */
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.get('/', function(req, res) {
    /* ... */
});

var server = app.listen(3000, function() {
    /* ... */
});
