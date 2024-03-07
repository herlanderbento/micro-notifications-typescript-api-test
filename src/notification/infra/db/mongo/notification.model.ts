import { Schema, Types, model } from "mongoose";
import { INotificationModelDocument } from "./notification-model.mapper";

export const NotificationModel = model<INotificationModelDocument>(
  "notifications",
  new Schema({
    _id: String,
    recipientId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isRead: Boolean,
    createdAt: Date,
  })
);
