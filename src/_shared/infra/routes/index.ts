import Router from "express";
import { notificationRoutes } from "~/notification/infra";

const router = Router();

router.get("/", (_, res) => {
  return res.json("Welcome to the Mirantes Notification api.");
});

router.use("/notifications", notificationRoutes);

export { router };
