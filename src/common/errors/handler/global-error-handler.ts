import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorCodeRoutes } from 'src/common/constant/error-code-routes';
import { SnackBarService } from 'src/common/services/snack-bar/snack-bar.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private router: Router, private snackBar: SnackBarService) {}

  handleError(error: any) {
    if (error.route === ErrorCodeRoutes.retry) {
      console.warn(error);
      this.snackBar.openSnackBar(error.snackBarModel);
      return;
    }

    console.error(error);

    if (typeof error.route === 'string') {
      this.router.navigate([error.route]);
      return;
    }

    this.router.navigate([ErrorCodeRoutes.systemError]);
  }
}
