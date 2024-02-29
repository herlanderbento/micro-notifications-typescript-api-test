import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from '~/_shared/application';
import {
  NotificationSearchParams,
  NotificationSearchResult,
  NotificationsRepository,
} from '~/notification/domain';
import { NotificationOutput, NotificationOutputMapper } from '../../common';
import { ListNotificationsInput } from './list-notification.input';

export class ListNotificationsUseCase
  implements IUseCase<ListNotificationsInput, ListNotificationsOutput>
{
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(input: ListNotificationsInput): Promise<ListNotificationsOutput> {
    const params = new NotificationSearchParams(input);

    const notification = await this.notificationRepository.findManyByRecipientId(
      input.recipientId.toString(),
      params
    );

    return this.toOutput(notification);
  }

  private toOutput(searchResult: NotificationSearchResult): ListNotificationsOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return NotificationOutputMapper.toOutput(item);
    });

    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListNotificationsOutput = PaginationOutput<NotificationOutput>;
