const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(5000);
const io = socketio(expressServer);

io.on('connection', socket => {
    console.log('connected', socket.id);

    socket.emit('messageFromServer', { data: 'Welcome to the server!' })
    socket.on('messageFromClient', (dataFromClient) => {
        console.log('messageFromClient', dataFromClient);
    })
})