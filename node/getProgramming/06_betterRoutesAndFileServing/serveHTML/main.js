const http = require('http'),
  httpStatus = require('http-status-codes'),
  fs = require('fs');
const router = require('./router');


const port = 3000;
const plainContentType = {'Content-Type': 'text/plain'};
const htmlContentType = {'Content-Type': 'text/html'};

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
      if (errors) console.log('Error reading the file...');
      res.end(data);
  });
};


router.get('/', (req, res) => {
    res.writeHead(httpStatus.OK, plainContentType);
    res.end('INDEX');
});

router.get('/index.html', (req, res) => {
    res.writeHead(httpStatus.OK, htmlContentType);
    customReadFile('views/index.html', res)
});

router.post('/', (req, res) => {
    res.writeHead(httpStatus.OK, plainContentType);
    res.end('POSTED');
})

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port ${port}`);



