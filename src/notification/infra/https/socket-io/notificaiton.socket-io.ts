import { NotificationOutput } from '~/notification/application';
import { io } from '~/server';

export class NotificationSocketIO {
  private notifications: NotificationOutput[] = [];

  emitNotification(notification: NotificationOutput): void {
    this.notifications.push(notification);

    if (io) {
      io.emit('newNotification', notification);
    }
  }
}
