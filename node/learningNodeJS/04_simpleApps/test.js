var http = require('http');
var s = http.createServer(handleIncomingRequest).listen(8080);
  
function handleIncomingRequest(req, res) {
  linesep();
  console.log(req);
  linesep();
  console.log(res);
  linesep();

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({error: null}) + '\n');
}

function linesep() {
  console.log('-------------------------------------------------------------');
}
