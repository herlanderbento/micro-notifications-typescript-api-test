import { IUseCase } from "~/_shared/application";
import { ReadNotificationInput } from "./read-notification.input";
import { NotificationsRepository } from "~/notification/domain";
import { NotAllowedError, NotficationNotFoundError } from "~/_shared/domain";
import { NotificationOutput, NotificationOutputMapper } from "../../common";

export class ReadNotificationUseCase
  implements IUseCase<ReadNotificationInput, ReadNotificationOutput>
{
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(input: ReadNotificationInput): Promise<ReadNotificationOutput> {
    const notification = await this.notificationsRepository.findById(
      input.notificationId
    );

    if (!notification) {
      throw new NotficationNotFoundError();
    }

    if (input.recipientId !== notification.recipientId.toString()) {
      throw new NotAllowedError();
    }

    notification.read();

    await this.notificationsRepository.update(notification);

    return NotificationOutputMapper.toOutput(notification);
  }
}

export type ReadNotificationOutput = NotificationOutput;
