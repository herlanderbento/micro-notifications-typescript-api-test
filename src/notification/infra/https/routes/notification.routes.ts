import { Router } from "express";
import { sendNotificationFactory } from "../controllers";

const notificationRoutes = Router({ mergeParams: true });

notificationRoutes.post("/", (req, res) =>
  sendNotificationFactory.handle(req, res)
);

export { notificationRoutes };
