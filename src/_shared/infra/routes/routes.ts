import Router from "express";
import { notificationRoutes } from "~/notification/infra";

const routes = Router();

routes.use("/notifications", notificationRoutes);

export { routes };
