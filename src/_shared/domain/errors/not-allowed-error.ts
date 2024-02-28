import { StatusCodes } from "http-status-codes";
import { AppError } from "./app.errors";

export class NotAllowedError extends AppError {
  constructor(message?: string) {
    super({
      name: "NotAllowedError",
      message: message ?? "Not allowed",
      statusCode: StatusCodes.NOT_FOUND,
    });
  }
}
