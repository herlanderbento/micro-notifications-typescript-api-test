import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SendNotificationUseCase } from '~/notification/application';
import { sendNotificationValidated } from './validator';
import { NotificationSocketIO } from '~/notification/infra/https/socket-io';


export class SendNotificationController {
  constructor(
    private sendNotificationUseCase: SendNotificationUseCase,
    private notificationSocketIo: NotificationSocketIO
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const input = await sendNotificationValidated(request);

    const output = await this.sendNotificationUseCase.execute(input);

    this.notificationSocketIo.emitNotification(output);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
