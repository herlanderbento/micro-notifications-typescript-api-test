import { EntityID } from "~/_shared/domain";
import { Notification } from "~/notification/domain";

export type NotificationOutput = {
  id: string;
  recipientId: EntityID;
  title: string;
  content: string;
  readAt?: Date | null;
  createdAt: Date;
};

export class NotificationOutputMapper {
  static toOutput(entity: Notification): NotificationOutput {
    return entity.toJSON();
  }
}
