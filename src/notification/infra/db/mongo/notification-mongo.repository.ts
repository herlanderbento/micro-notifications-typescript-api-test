import { NotFoundError, PaginationParams } from "~/_shared/domain";
import {
  Notification,
  NotificationSearchParams,
  NotificationSearchResult,
  NotificationsRepository,
} from "~/notification/domain";

import { NotificationModel } from "./notification.model";
import { NotificationModelMapper } from "./notification-model.mapper";

export class NotificationMongoRepository implements NotificationsRepository {
  constructor(private notificationModel: typeof NotificationModel) {}
 
  async insert(entity: Notification): Promise<void> {

    const modelProps = NotificationModelMapper.toModel(entity);
    await this.notificationModel.create(modelProps);
  }

  async update(entity: Notification): Promise<void> {
    const modelProps = NotificationModelMapper.toModel(entity);

    const affectedRows = await this.notificationModel.findByIdAndUpdate(
      entity.id.toString(),
      modelProps
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }

  async findById(id: string): Promise<Notification | null> {
    const model = await this.notificationModel.findOne({
      _id: id,
    });

    return model ? NotificationModelMapper.toEntity(model) : null;
  }

  async findManyByRecipientId(
    recipientId: string,
    props: NotificationSearchParams
  ): Promise<NotificationSearchResult> {
    const skip = (props.page - 1) * props.perPage;
    const limit = props.perPage;

    const models = await this.notificationModel
      .find({
        recipientId,
      })
      .skip(skip)
      .limit(limit)
      .lean();

    const count = await this.notificationModel.countDocuments(models);

    return new NotificationSearchResult({
      items: models.map((model) => {
        //@ts-ignore
        return NotificationModelMapper.toEntity(model);
      }),
      currentPage: props.page,
      perPage: props.perPage,
      total: count,
    });
  }

  async delete(id: string): Promise<void> {
    await this.notificationModel.findByIdAndDelete(id)
  }

  getEntity(): new (...args: any[]) => Notification {
    return Notification;
  }
}
