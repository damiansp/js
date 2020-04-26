var https   = require('https');
var fs      = require('fs');
var connect = require('connect');
  
var options = {key: fs.readFileSync('../key.pem'),
               cert: fs.readFileSync('../cert.pem')};
var app = connect();

https.createServer(options, app).listen(3000);
