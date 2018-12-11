var http = require('http');

var server = http.createServer(function (req, resp) {
    console.log('Requesting headers...');
    console.log(req.headers);
    resp.write('Hi there, client!');
    resp.end();
}).listen(3000);

console.log('Server running on port 3000');
