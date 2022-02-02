let users = [];

module.exports = (io, socket) => {
  const userConnected = (user) => {
    users = [...users, { ...user, socketId: socket.id }];
    socket.emit('user:list', users);
    socket.broadcast.emit('user:list', users);
  };

  const userDisconnected = () => {
    users = users.filter((x) => x.socketId !== socket.id);
    socket.broadcast.emit('user:list', users);
  };

  const handleNameChange = (user) => {
    users = [...users.filter((x) => x.socketId !== socket.id), { ...user, socketId: socket.id }];
    io.emit('name:change', users);
  };

  socket.on('user:connect', userConnected);
  socket.on('disconnect', userDisconnected);
  socket.on('name:change', handleNameChange);
};
