const io = require('socket.io')(3000); // The port that its going to be running on

io.on('connection', socket => {
    socket.emit('chat-message', 'A new user has joined this chat');
});