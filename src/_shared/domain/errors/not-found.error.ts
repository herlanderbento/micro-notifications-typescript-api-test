import { StatusCodes } from 'http-status-codes';
import { Entity } from '../entities/entity';
import { AppError } from './app.errors';

export class NotFoundError extends AppError {
  constructor(id: any[] | any, entityClass: new (...args: any[]) => Entity) {
    const idsMessage = Array.isArray(id) ? id.join(',') : id;
    super({
      name: 'NotFoundError',
      message: `${entityClass.name} Not Found using ID ${idsMessage}`,
      statusCode: StatusCodes.NOT_FOUND,
    });
  }
}
