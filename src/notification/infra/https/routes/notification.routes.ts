import { Router } from 'express';
import {
  deleteNotificationFactory,
  listNotificationsFactory,
  readNotificationFactory,
  sendNotificationFactory,
} from '../controllers';

const notificationRoutes = Router();

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

notificationRoutes.delete(
  '/:id',
  (req, res, next) => {
    deleteNotificationFactory.handle(req, res, next);
  }
);

export { notificationRoutes };
