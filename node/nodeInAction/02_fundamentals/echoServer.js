const net = require('net');
const server = net.createServer(socket => {
    socket.on('data', data => { // use socket.once() for single-events
        socket.write(data);
    });
}).listen(8000);
