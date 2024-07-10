import cors from 'cors';
import express from 'express';

import formatMessage from './utils/formatMessage.js';

const serverMessage = 'ServerBot';

const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from 'socket.io';

import 'dotenv/config';

const PORT = process.env.PORT;

const corsOption = {
  origin: '*',
};
app.use(cors(corsOption));

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('new websocket connect');
  socket.emit('message', formatMessage(serverMessage, 'hey welcome dog'));

  //server message user connection
  socket.broadcast.emit(
    'message',
    formatMessage(serverMessage, 'New user joined')
  );

  socket.on('joinChat', (username) => {
    socket.broadcast.emit(
      'message',
      formatMessage(serverMessage, `${username} has joined the chat`)
    );
  });

  //server message user disconnect
  socket.on('disconnect', () => {
    io.emit(
      'message',
      formatMessage(serverMessage, 'a user has left the chat')
    );
  });

  //Chatmessage listener
  socket.on('chatMessage', (message) => {
    console.log(message);
    io.emit('message', formatMessage('user', message));
  });
});

server.listen(PORT, () => {
  console.log('Server is running on', PORT);
});
