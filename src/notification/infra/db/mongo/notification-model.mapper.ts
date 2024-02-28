import { FlattenMaps, Types } from "mongoose";
import { EntityID } from "~/_shared/domain";
import { Notification, NotificationProps } from "~/notification/domain";


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
      readAt: entity.readAt,
      createdAt: entity.createdAt,
    };
  }

  static toEntity(raw: INotificationModelDocument) {
    return Notification.create(
      {
        recipientId: raw.recipientId,
        title: raw.title,
        content: raw.content,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
      },
      new EntityID(String(raw._id))
    );
  }
}
