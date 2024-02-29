import {
  IRepository,
  PaginationParams,
  SearchParams,
  SearchResult,
} from '~/_shared/domain';
import { Notification } from './notification';

export interface NotificationsRepository
  extends Pick<IRepository<Notification>, 'insert' | 'update' | 'findById'> {
  findManyByRecipientId(
    recipientId: string,
    props: NotificationSearchParams
  ): Promise<NotificationSearchResult>;
}

export class NotificationSearchParams extends SearchParams {}

export class NotificationSearchResult extends SearchResult<Notification> {}
