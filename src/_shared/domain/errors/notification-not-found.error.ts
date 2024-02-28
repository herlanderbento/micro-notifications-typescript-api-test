import { StatusCodes } from "http-status-codes";
import { AppError } from "./app.errors";

export class NotficationNotFoundError extends AppError {
  constructor(message?: string) {
    super({
      name: "NotficationNotFoundError",
      message: message ?? "Notification not found",
      statusCode: StatusCodes.NOT_FOUND,
    });
  }
}
