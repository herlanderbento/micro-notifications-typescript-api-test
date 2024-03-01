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
    const result = await asyncFunction(request, response, next);
    return result;
  } catch (error) {
    next(error);
    return null;
  }
}
