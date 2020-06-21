const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;
const app = http.createServer();

app.on('request', (req, res) => {
    let body = [];
    req.on('data', (bodyData) => { body.push(bodyData); });
    req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });
    
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {'Content-Type': 'text/html'});
    let responseMessage = '<h1>Oh Yeah!</h1>\n<h3>Content on you screen!</h3>';
    res.end(responseMessage);
}).listen(port);
console.log(`The server has started and is listening on port ${port}.`);

const getJSONString = obj => { return JSON.stringify(obj, null, 2); };
