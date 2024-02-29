import { ListNotificationsUseCase } from '~/notification/application';
import {
  NotificationMongoRepository,
  NotificationModel,
} from '~/notification/infra/db';
import { ListNotificationsController } from '../list-notifications.controller';

const notificationRepository = new NotificationMongoRepository(
  NotificationModel
);

const useCase = new ListNotificationsUseCase(notificationRepository);
export const listNotificationsFactory = new ListNotificationsController(
  useCase
);
