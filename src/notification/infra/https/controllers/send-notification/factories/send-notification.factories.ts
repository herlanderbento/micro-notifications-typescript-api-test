import { SendNotificationUseCase } from "~/notification/application";
import {
  NotificationModel,
  NotificationMongoRepository,
} from "~/notification/infra/db";
import { SendNotificationController } from "../send-notification.controller";

const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);

const useCase = new SendNotificationUseCase(notificationRepository);
export const sendNotificationFactory = new SendNotificationController(useCase);
