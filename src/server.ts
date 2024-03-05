import http from 'http';
import app from './app';
import { Server, Socket } from 'socket.io';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.BASE_URL_FRONTEND,
  },
});

const PORT: number = Number(process.env.PORT) || 3000;

io.on('connection', (socket: Socket) => {
  console.log('socket io connected');

  socket.on('newNotification', (notification) => {
    console.log(notification);
    io.emit('newNotification', notification);
  });

  socket.on('disconnect', () => {
    console.log('socket io disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/v1`);
  console.log(` === SERVER IS RUNNING ON PORT [${PORT}] === `);
});

export { io };
