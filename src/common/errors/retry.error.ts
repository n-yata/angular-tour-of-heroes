import { ErrorCodeRoutes } from '../const/error-code-routes';

export class RetryError extends Error {
  route: string = ErrorCodeRoutes.retry;

  constructor(e?: string) {
    super(e);
    this.name = 'RetryError';
  }
}
