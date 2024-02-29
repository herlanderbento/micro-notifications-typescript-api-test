import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT: number = Number(process.env.PORT) || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/v1`);
  console.log(` === SERVER IS RUNNING ON PORT [${PORT}] === `);
});
