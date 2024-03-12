import amqp from 'amqplib';
import { RabbitMQError } from '~/_shared/domain/errors/rabbit-mq.error';
import { Queue } from '~/_shared/domain/repository/queue-interface';

export class RabbitMQAdapter implements Queue {
  async on(queueName: string, callback: Function): Promise<void> {
    const connection = await amqp.connect(process.env.CLOUDAMQP_URL);

    if (!connection) {
      throw new RabbitMQError();
    }

    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });

    channel.consume(
      queueName,
      async function (msg: any) {
        const input = JSON.parse(msg.content.toString());
        await callback(input);
        channel.ack(msg);
      },
      { noAck: false }
    );
  }

  async publish(queueName: string, data: any): Promise<void> {
    const connection = await amqp.connect(process.env.CLOUDAMQP_URL);

    if (!connection) {
      throw new RabbitMQError();
    }

    const channel = await connection.createChannel();

    await channel.assertQueue(queueName);
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    await channel.close();
  }
}
