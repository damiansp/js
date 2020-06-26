const http = require('http'),
  httpStatus = require('http-status-codes'),
  fs = require('fs');

const port = 3000,
  routeMap = {'/': 'views/index.html'};


const getViewURL = (url) => { return `views${url}.html`; };


http.createServer((req, res) => {
    let viewURL = getViewURL(req.url);
    fs.readFile(viewURL, (error, data) => {
        if (error) {
          res.writeHead(httpStatus.NOT_FOUND);
          res.write('<h1>FILE NOT FOUND</h1>');
        } else {
          res.writeHead(httpStatus.OK, {'Content-Type': 'text/html'});
          res.write(data);
        }
        res.end();
    });
}).listen(port);

console.log(`Server running and listening on port ${port}`);
