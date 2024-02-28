import "reflect-metadata";
import "express-async-errors";
import "./_shared/infra/configs/env";

import express, { Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import "./_shared/infra/db/mongo";

import swaggerDocs from "~/docs/swagger.json";

import { errors } from "./_shared/domain/errors";
import { versions } from "./_shared/infra/configs/versions";
import { router } from "./_shared/infra/routes";

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

app.use(versions.current, router);
app.use(errors);

export default app;
