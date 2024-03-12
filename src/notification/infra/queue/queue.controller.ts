import { RabbitMQAdapter } from '~/_shared/infra';
import { NotificationQueue } from '~/notification/domain';
import { sendNoticationUseCaseFactory } from './factories/send-notification/send-notification.factory';

export class QueueController {
  async execute() {
    const server = new RabbitMQAdapter();

    await server.on(NotificationQueue.SEND_NOTIFICATION, async (event: any) => {
      console.log('NotificationQueue', event);
      await sendNoticationUseCaseFactory.execute(event);
    });
  }
}
