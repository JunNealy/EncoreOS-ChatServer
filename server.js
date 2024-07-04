import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import { createServer } from 'http';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();

const server = createServer(app);

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  console.log('a new client connected!');
  ws.send('welcome to the server');
});

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});
