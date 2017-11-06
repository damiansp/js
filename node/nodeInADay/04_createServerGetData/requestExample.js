var request = require('request');

request('http://www.google.com', function(req, res, body) {
    console.log(body);
});
