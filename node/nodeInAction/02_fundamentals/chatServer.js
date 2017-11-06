const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.setMaxListeners(50);

// Add a listener for join event--stores user's client obj
channel.on('join', function(id, client) {
    const welcome = `
      Welcome!\nGuests online: ${this.listeners('broadcast').length}`;
    client.write(`${welcome}\n`);
    this.clients[id] = client;
    this.subscriptions[id] = (senderId, message) => {
      // Ignore data if directly broadcast by user
      if (id != senderId) { this.clients[id].write(message); }
    };
    // Add a listener specific to current user for broadcast event
    this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, `${id} has left the chat\n`);
});

channel.on('shutdown', () => {
    channel.emit('broadcast', '', 'The server has shut down.\n');
    channel.removeAllListeners('broadcast');
});


const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    // Emit a join event when new user connects to server--specify user ID and
    // client obj
    channel.emit('join', id, client);
    client.on('data', data => {
        data = data.toString();
        if (data === 'shutdown\r\n') { channel.emit('shutdown'); }
        // Emit a channel broadcast event--specify the user ID and message when
        // user sends data
        channel.emit('broadcast', id, data);
     });
    client.on('close', () => {
        channel.emit('leave', id);
    });
}).listen(8000);
