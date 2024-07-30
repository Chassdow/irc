const config = require('./config_module');

config.app.use(config.cors());

config.io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        config.io.emit('chat message', msg);
    });
});

config.server.listen(4242, () => {
    console.log('listening on *:4242');
  });