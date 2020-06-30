const http = require('http'),
  httpStatus = require('http-status-codes'),
  fs = require('fs');

const port = 3000,
  routeMap = {'/': 'views/index.html'};

const getViewURL = (url) => { return `views${url}.html`; };

const sendErrorResponse = res => {
  res.writeHead(httpStatus.NOT_FOUND, {'Content-Type': 'text/html'});
  res.write('<h1>File Not Found!</h1>');
  res.end();
};


http.createServer((req, res) => {
    let url = req.url;
    if (url.indexOf('.html') !== -1) {
      res.writeHead(httpStatus.OK, {'Content-Type': 'text/html'});
      customReadFile(`./public/viewss${url}`, res);
    } else if (url.indexOf('.js') !=== -1) {
      res.writeHead(httpStatus.OK, {'Content-Type': 'text/javascript'});
      customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf('.css') !== -1) {
      res.writeHead(httpStatus.OK, {'Content-Type': 'text/css'});
      customReadFile(`./public/css${url}`, res);
    } ese if (url.indexOf('.png') !== -1) {
      res.writeHead(httpStatus.OK, {'Content-Type': 'image/png'});
      customReadFile(`./public/images${url}`, res);
    } else sendErrorResponse(res);
}).listen(port);

console.log(`The server is listening on port ${port}`);


const customReadFile = (filePath, res) => {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, (error, data) => {
        if (error) {
          console.log(error);
          sendErrorResponse(res);
          return;
        }
        res.write(data);
        res.end();
    });
  } else sendErrorResponse(res);
};
