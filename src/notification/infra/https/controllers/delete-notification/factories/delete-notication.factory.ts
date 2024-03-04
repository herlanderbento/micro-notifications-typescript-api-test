import { DeleteNotificationUseCase } from "~/notification/application";
import { NotificationMongoRepository, NotificationModel } from "~/notification/infra/db";
import { DeleteNotificationController } from "../delete-notification.controller";


const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);

const useCase = new DeleteNotificationUseCase(notificationRepository);
export const deleteNotificationFactory = new DeleteNotificationController(useCase);
