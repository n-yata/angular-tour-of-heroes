import { ErrorCodeRoutes } from '../constant/error-code-routes';
import { SnackBarModel } from '../services/snack-bar/snack-bar.model';

export class RetryError extends Error {
  route: string = ErrorCodeRoutes.retry;
  snackBarModel = new SnackBarModel();

  constructor(snackBarModel?: SnackBarModel, e?: string) {
    super(e);
    this.name = 'RetryError';
    if (snackBarModel) {
      this.snackBarModel = snackBarModel;
    }
  }
}
