import { ErrorCodeRoutes } from '../constant/error-code-routes';

export class Code500Error extends Error {
  route: string = ErrorCodeRoutes.code500;

  constructor(e?: string) {
    super(e);
    this.name = 'Code500Error';
  }
}
