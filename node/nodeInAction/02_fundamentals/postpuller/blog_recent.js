const http = require('http');
const fs = require('fs');

// Create HTTP server and use callback to define response logic
http.createServer((req, res) => {
    if (req.url == '/') {
      // Read json, use callback to define what to do with contents
      fs.readFile('./titles.json', (err, data) => {
          if (err) {
            // log error and returns "Server Error" to client
            console.error(err);
            res.end('Server Error');
          } else {
            const titles = JSON.parse(data.toString()); // parse json
            // Read html template, use callback when loaded
            fs.readFile('./template.html', (err, data) => {
                if (err) {
                  console.error(err);
                  res.end('Server Error');
                } else {
                  const template = data.toString();
                  // Assemble HTML
                  const html = template.replace('%', titles.join('</li><li>'));
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end(html); // sends html to user
                }
            });
          }
      });
    }
}).listen(8000, '127.0.0.1');
