import { IRepository, SearchParams, SearchResult } from '~/_shared/domain';
import { Notification } from './notification';

export interface NotificationsRepository
  extends Omit<IRepository<Notification>, 'findAll' | 'bulkInsert'> {
  findManyByRecipientId(
    recipientId: string,
    props: NotificationSearchParams
  ): Promise<NotificationSearchResult>;
}

export class NotificationSearchParams extends SearchParams {}

export class NotificationSearchResult extends SearchResult<Notification> {}
