import { ErrorCodeRoutes } from '../constant/error-code-routes';

export class SystemError extends Error {
  route: string = ErrorCodeRoutes.systemError;

  constructor(e?: string) {
    super(e);
    this.name = 'SystemError';
  }
}
