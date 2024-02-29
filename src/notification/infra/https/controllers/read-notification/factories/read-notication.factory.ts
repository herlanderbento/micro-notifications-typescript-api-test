import { ReadNotificationUseCase } from "~/notification/application";
import { NotificationMongoRepository, NotificationModel } from "~/notification/infra/db";
import { ReadNotificationController } from "../read-notification.controller";


const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);

const useCase = new ReadNotificationUseCase(notificationRepository);
export const readNotificationFactory = new ReadNotificationController(useCase);
