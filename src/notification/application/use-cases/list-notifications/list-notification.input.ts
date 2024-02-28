import { EntityID } from "~/_shared/domain";

export type ListNotificationsInput = {
  recipientId: EntityID;
  page?: number;
  perPage?: number;
};
