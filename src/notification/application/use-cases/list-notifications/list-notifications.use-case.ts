import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from "~/_shared/application";
import {
  NotificationSearchParams,
  NotificationSearchResult,
  NotificationsRepository,
} from "~/notification/domain";
import { NotificationOutput, NotificationOutputMapper } from "../../common";
import { ListNotificationsInput } from "./list-notification.input";
import { NotficationNotFoundError } from "~/_shared/domain";

export class ListNotificationsUseCase
  implements IUseCase<ListNotificationsInput, ListNotificationsOutput>
{
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    input: ListNotificationsInput
  ): Promise<ListNotificationsOutput> {
    // const notification =
    //   await this.notificationRepository.findManyByRecipientId(
    //     input.recipientId.toString(),
    //     {
    //       page: input.page,
    //       perPag: input.perPage,
    //     }
    //   );

    // const notifications = notification.map((item) => {
    //   return NotificationOutputMapper.toOutput(item);
    // });

    // return notifications;

    const params = new NotificationSearchParams(input);

    const notification =
      await this.notificationRepository.findManyByRecipientsId(
        input.recipientId.toString(),
        params
      );

    if (!notification) {
      throw new NotficationNotFoundError();
    }

    return this.toOutput(notification);
  }

  private toOutput(
    searchResult: NotificationSearchResult
  ): ListNotificationsOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return NotificationOutputMapper.toOutput(item);
    });

    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListNotificationsOutput = PaginationOutput<NotificationOutput>;
