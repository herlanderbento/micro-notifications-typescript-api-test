import { NextFunction, type Request, type Response } from 'express';
import { ReadNotificationUseCase } from '~/notification/application';
import { StatusCodes } from 'http-status-codes';
import { readNotificationValidated } from './validator';
import { executeSafely } from '~/_shared/infra';
import { Queue } from '~/_shared/domain';

export class ReadNotificationController {
  constructor(
    private readonly readNotificationUseCase: ReadNotificationUseCase
  ) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const input = await readNotificationValidated(request);

    const output = await executeSafely(
      async () => this.readNotificationUseCase.execute(input),
      request,
      response,
      next
    );

    if (output !== null) {
      response.status(StatusCodes.OK).json({ data: output });
    }
  }
}
