const express = require('express');
const { createServer } = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const cors = require('cors');

const routes = require('./routes');
const userHandlers = require('./user/userHandlers');

mongoose
  .connect('mongodb://localhost/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected db'))
  .catch((err) => console.log(err));

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
  },
});

global.io = io;

const corsOptions = {
  exposedHeaders: ['token'],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/', routes);

const onConnection = (socket) => {
  userHandlers(io, socket);
};

io.on('connection', onConnection);

server.listen(5000, () => console.log('listening'));
