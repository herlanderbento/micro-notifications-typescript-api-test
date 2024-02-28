import { EntityID } from "~/_shared/domain";

export interface SendNotificationInput {
  recipientId: EntityID;
  title: string;
  content: string;
}
