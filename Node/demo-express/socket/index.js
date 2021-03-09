const net = require('net');

const server = net.createServer(socket => { 
    socket.write('hello');
})

server.on('error', err => { 
    throw err;
})

module.exports = server;