const socket = io('https://localhost:3000') // The port the socket is going to be running on

socket.on('chat-message', data => {
    console.log(data);
});