import {
  IRepository,
  ISearchableRepository,
  PaginationParams,
  SearchParams,
  SearchResult,
} from "~/_shared/domain";
import { Notification } from "./notification";

export interface NotificationsRepository
  extends Pick<IRepository<Notification>, "insert" | "update" | "findById"> {
  findManyByRecipientId(
    recipientId: string,
    params: PaginationParams
  ): Promise<Notification[]>;

  findManyByRecipientsId(
    recipientId: string,
    props: NotificationSearchParams
  ): Promise<NotificationSearchResult | null>;
}

export class NotificationSearchParams extends SearchParams {}

export class NotificationSearchResult extends SearchResult<Notification> {}
