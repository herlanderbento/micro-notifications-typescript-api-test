import { StatusCodes } from 'http-status-codes';
import { AppError } from './app.errors';

export class RabbitMQError extends AppError {
  constructor(message?: string) {
    super({
      name: 'RabbitMQError',
      message: message ?? 'RabbitMQ connection not established.',
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
