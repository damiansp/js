var https = require('https');
var fs    = require('fs');
var http  = require('http');

var options = {key: fs.readFileSync('../key.pem'),
               cert: fs.readFileSync('../cert.pem')};

https.createServer(options, function(req, res) { res.end('secure!'); })
  .listen(443);
http.createServer(function(req, res) {
    res.writeHead(301,
                  {'Location': 'https://' + req.headers['host'] + req.url});
    res.end();
}).listen(80);
