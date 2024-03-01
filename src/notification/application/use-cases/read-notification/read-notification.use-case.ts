import { IUseCase } from '~/_shared/application';
import { ReadNotificationInput } from './read-notification.input';
import { Notification, NotificationsRepository } from '~/notification/domain';
import { NotFoundError } from '~/_shared/domain';
import { NotificationOutput, NotificationOutputMapper } from '../../common';

export class ReadNotificationUseCase
  implements IUseCase<ReadNotificationInput, ReadNotificationOutput>
{
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(input: ReadNotificationInput): Promise<ReadNotificationOutput> {
    const notification = await this.notificationsRepository.findById(
      input.notificationId
    );

    if (!notification) {
      throw new NotFoundError(input.notificationId, Notification);
    }

    if (input.recipientId !== notification.recipientId.toString()) {
      throw new NotFoundError(input.recipientId, Notification);
    }

    notification.read();

    await this.notificationsRepository.update(notification);

    return NotificationOutputMapper.toOutput(notification);
  }
}

export type ReadNotificationOutput = NotificationOutput;
