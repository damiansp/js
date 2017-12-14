var http = require('http');
var s = http.createServer(handleIncomingRequest).listen(8080);
  
function handleIncomingRequest(req, res) {
  console.log('Incoming Request:' + req.method + ' ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({error: null}) + '\n');
}

