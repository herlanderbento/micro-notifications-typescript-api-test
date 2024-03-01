import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ListNotificationsUseCase } from '~/notification/application';
import { listNotificationsValidated } from './validator';

export class ListNotificationsController {
  constructor(
    private readonly listNotificationsUseCase: ListNotificationsUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const input = await listNotificationsValidated(request);

    const output = await this.listNotificationsUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
