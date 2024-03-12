import { SendNotificationUseCase } from '~/notification/application';
import {
  NotificationMongoRepository,
  NotificationModel,
} from '~/notification/infra/db';
import { NotificationSocketIO } from '~/notification/infra/socket-io';

const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);
const notificationSocketIO = new NotificationSocketIO();

const sendNoticationUseCaseFactory = new SendNotificationUseCase(
  notificationRepository,
  notificationSocketIO
);


export { sendNoticationUseCaseFactory }