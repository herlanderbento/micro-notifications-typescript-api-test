import { IUseCase } from '~/_shared/application';
import { SendNotificationInput } from './send-notification.input';
import { Notification, NotificationsRepository } from '~/notification/domain';
import { NotificationOutput, NotificationOutputMapper } from '../../common';
import { NotificationSocketIO } from '~/notification/infra';

export class SendNotificationUseCase
  implements IUseCase<SendNotificationInput, SendNotificationOutput>
{
  constructor(
    private notificationRepository: NotificationsRepository,
    private notificationSocketIo: NotificationSocketIO
  ) {}

  async execute(input: SendNotificationInput): Promise<SendNotificationOutput> {
    const notification = Notification.create(input);

    await this.notificationRepository.insert(notification);

    const notificationOutput = NotificationOutputMapper.toOutput(notification);

    this.notificationSocketIo.emitNotification(notificationOutput);

    return notificationOutput;
  }
}

export type SendNotificationOutput = NotificationOutput;
