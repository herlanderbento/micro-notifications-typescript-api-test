import { IUseCase } from '~/_shared/application';
import { SendNotificationInput } from './send-notification.input';
import { Notification, NotificationsRepository } from '~/notification/domain';
import { NotificationOutput, NotificationOutputMapper } from '../../common';
import { Queue } from '~/_shared/domain';

export class SendNotificationUseCase
  implements IUseCase<SendNotificationInput, SendNotificationOutput>
{
  constructor(
    private notificationRepository: NotificationsRepository,
    private queue: Queue
  ) {}

  async execute(input: SendNotificationInput): Promise<SendNotificationOutput> {
    const notification = Notification.create(input);

    await this.notificationRepository.insert(notification);

    await this.queue.publish('SendNotification', notification);

    return NotificationOutputMapper.toOutput(notification);
  }
}

export type SendNotificationOutput = NotificationOutput;
