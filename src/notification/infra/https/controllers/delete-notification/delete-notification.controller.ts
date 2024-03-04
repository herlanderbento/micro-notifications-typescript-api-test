import { NextFunction, type Request, type Response } from 'express';
import { DeleteNotificationUseCase } from '~/notification/application';
import { StatusCodes } from 'http-status-codes';
import { executeSafely } from '~/_shared/infra';
import { deleteNotificationValidated } from './validator';

export class DeleteNotificationController {
  constructor(
    private readonly deleteNotificationUseCase: DeleteNotificationUseCase
  ) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const input = await deleteNotificationValidated(request);

    const output = await executeSafely(
      async () => this.deleteNotificationUseCase.execute(input),
      request,
      response,
      next
    );

    if (output !== null) {
      response.status(StatusCodes.NO_CONTENT).json({ data: output });
    }
  }
}
