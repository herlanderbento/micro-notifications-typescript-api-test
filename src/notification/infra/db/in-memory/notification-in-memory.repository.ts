import { InMemoryRepository } from '../../../../_shared/infra';
import {
  Notification,
  NotificationSearchParams,
  NotificationSearchResult,
  NotificationsRepository,
} from '../../../domain';

export class NoticationInMemoryRepository
  extends InMemoryRepository<Notification>
  implements NotificationsRepository
{
  findManyByRecipientId(
    recipientId: string,
    props: NotificationSearchParams
  ): Promise<NotificationSearchResult> {
    throw new Error('Method not implemented.');
  }

  getEntity(): new (...args: any[]) => Notification {
    return Notification;
  }
}
