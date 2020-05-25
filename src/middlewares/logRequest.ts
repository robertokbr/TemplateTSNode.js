import { Request, Response, NextFunction } from 'express';

export default function logRequest(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}]: ${url}`;
  console.log(logLabel);
  return next();
}
