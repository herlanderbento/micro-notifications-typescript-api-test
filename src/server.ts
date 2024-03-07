import http from 'http';
import app from './app';
import { Server, Socket } from 'socket.io';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      process.env.FRONTEND_BASE_URL_B2B,
      process.env.FRONTEND_BASE_URL_B2C,
    ],
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
  console.log(` === SERVER IS RUNNING, http://localhost:${PORT}/v1 === `);
});

export { io };
