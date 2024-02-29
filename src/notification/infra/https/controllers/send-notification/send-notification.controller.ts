import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SendNotificationUseCase } from '~/notification/application';
import { sendNotificationValidated } from './validator';

export class SendNotificationController {
  constructor(
    private readonly sendNotificationUseCase: SendNotificationUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const input = await sendNotificationValidated(request);

    const output = await this.sendNotificationUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
