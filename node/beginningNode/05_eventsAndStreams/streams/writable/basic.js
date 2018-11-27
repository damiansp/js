var fs = require('fs');

var ws = fs.createWriteStream('msg.txt');

ws.write('foo bar... ');
ws.end('bas');
  
