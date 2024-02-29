import { type Request, type Response } from 'express';
import { ReadNotificationUseCase } from '~/notification/application';
import { StatusCodes } from 'http-status-codes';
import { readNotificationValidated } from './validator';

export class ReadNotificationController {
  constructor(
    private readonly readNotificationUseCase: ReadNotificationUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const input = await readNotificationValidated(request);

    const output = await this.readNotificationUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
