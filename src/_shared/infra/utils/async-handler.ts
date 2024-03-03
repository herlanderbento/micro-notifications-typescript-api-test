import { Request, Response, NextFunction } from 'express';

export async function executeSafely(
  asyncFunction: (
    request: Request,
    response: Response,
    next: NextFunction
  ) => Promise<any>,
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    return await asyncFunction(request, response, next);
  } catch (error) {
    next(error);
    return null;
  }
}
