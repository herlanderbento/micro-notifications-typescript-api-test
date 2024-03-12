import "reflect-metadata";
import "express-async-errors";
import "./_shared/infra/configs/env";
import "./_shared/infra/configs/module-alias"

import express, { Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import "./_shared/infra/db/mongo";

import swaggerDocs from "~/docs/swagger.json";

import { errors } from "./_shared/domain/errors";
import { versions } from "./_shared/infra/configs/versions";
import { routes } from "./_shared/infra/routes";
import { QueueController } from "./notification/infra";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get("/v1/swagger", (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/src/docs/swagger.json");
});
app.get('/v1/docs', (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + '/src/docs/index.html');
});

app.use(versions.current, routes);
app.use(errors);


(async () => {
  await new QueueController().execute()
})()


export default app;
