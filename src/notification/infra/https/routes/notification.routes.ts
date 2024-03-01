import { Router } from 'express';
import {
  listNotificationsFactory,
  readNotificationFactory,
  sendNotificationFactory,
} from '../controllers';

const notificationRoutes = Router({ mergeParams: true });

notificationRoutes.post('/', (req, res) =>
  sendNotificationFactory.handle(req, res)
);

notificationRoutes.patch(
  '/:notificationId/read/:recipientId',
  (req, res, next) => {
    readNotificationFactory.handle(req, res, next);
  }
);

notificationRoutes.get('/:recipientId', (req, res) => {
  listNotificationsFactory.handle(req, res);
});

export { notificationRoutes };
