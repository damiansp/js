const connect = require('connect'),
  http = require('http');

let app = connect();

http.createServer(app).listen(3000);
console.log('server running on port 3000');
