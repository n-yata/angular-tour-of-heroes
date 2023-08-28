import { ErrorCodeRoutes } from '../const/error-code-routes';

export class Code404Error extends Error {
  route: string = ErrorCodeRoutes.code404;

  constructor(e?: string) {
    super(e);
    this.name = 'Code404Error';
  }
}
