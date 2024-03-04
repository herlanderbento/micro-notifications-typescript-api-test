import { IUseCase } from '~/_shared/application';
import { NotFoundError } from '~/_shared/domain';
import { Notification, NotificationsRepository } from '~/notification/domain';

export interface DeleteNotificationInput {
  id: string;
}

export class DeleteNotificationUseCase
  implements IUseCase<DeleteNotificationInput, DeleteNotificationOutput>
{
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(input: DeleteNotificationInput): Promise<DeleteNotificationOutput> {
    const notification = await this.notificationRepository.findById(input.id)

    if (!notification) {
      throw new NotFoundError(input.id, Notification);
    }

    await this.notificationRepository.delete(input.id)
  }
}


export type DeleteNotificationOutput = void;
