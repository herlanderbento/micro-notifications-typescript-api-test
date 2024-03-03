import { SendNotificationUseCase } from '~/notification/application';
import {
  NotificationModel,
  NotificationMongoRepository,
} from '~/notification/infra/db';
import { SendNotificationController } from '../send-notification.controller';
import { RabbitMQAdapter } from '~/_shared/infra';

const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);
const queue = new RabbitMQAdapter();

const useCase = new SendNotificationUseCase(notificationRepository, queue);
export const sendNotificationFactory = new SendNotificationController(useCase);
