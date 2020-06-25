const http = require('http');
const httpStatus = require('http-status-codes');

const routeResponseMap = {'/info': '<h1>Info Page</h1>',
                          '/contact': '<h1>Contact Us</h1>',
                          '/about': '<h1>Learn More About Us...</h1>',
                          '/hello': '<h1>Well Howdy, Pard\'ner</h1>',
                          '/error': '<h1>This is not the page you want</h1>'};
const port = 3000;
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (routeResponseMap[req.url]) res.end(routeResponseMap[req.url]);
    else res.end('<h1>Welcome, Sport!</h1>');
}).listen(port);
console.log(`The server has started and is listening on port ${port}.`);
