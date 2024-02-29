import { Request, Response, NextFunction } from 'express';
import { AppError } from './app.errors';

export const errors = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      statusCodes: err.statusCode
    });
  }

  console.log('error',err)

  return res.status(500).json({
    success: false,
    message: err.message,
  });
};
