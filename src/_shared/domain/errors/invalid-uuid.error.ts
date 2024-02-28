import { AppError } from './app.errors';
import { StatusCodes } from 'http-status-codes';

export class InvalidUuidError extends AppError {
  constructor(message?: string) {
    super({
      name: 'InvalidUuidError',
      message: message ?? 'Id must be a valid UUID',
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
}
