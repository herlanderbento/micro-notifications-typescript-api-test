import { StatusCodes } from "http-status-codes";
import { AppError } from "./app.errors";

export class InvalidTokenError extends AppError {
  constructor(message?: string) {
    super({
      name: "InvalidTokenError",
      message: message ?? "Token invalid!",
      statusCode: StatusCodes.CONFLICT,
    });
  }
}
