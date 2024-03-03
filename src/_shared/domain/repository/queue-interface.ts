export interface Queue {
  on(queueName: string, callback: Function): Promise<void>;
  publish(queueName: string, data: any): Promise<void>;
}
