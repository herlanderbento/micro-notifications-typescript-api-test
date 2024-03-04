import { Types } from 'mongoose';
import { EntityID } from '~/_shared/domain';
import { Notification, NotificationProps } from '~/notification/domain';

export type INotificationModelDocument = {
  _id: Types.UUID;
} & NotificationProps;

export class NotificationModelMapper {
  static toModel(entity: Notification) {
    return {
      _id: entity.id,
      recipientId: entity.recipientId.toString(),
      title: entity.title,
      content: entity.content,
      isRead: entity.isRead,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(raw: INotificationModelDocument) {
    return Notification.create(
      {
        recipientId: raw.recipientId,
        title: raw.title,
        content: raw.content,
        isRead: raw.isRead,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new EntityID(String(raw._id))
    );
  }
}
