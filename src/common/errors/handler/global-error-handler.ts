import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RetryModalComponent } from 'src/app/components/shared/retry-modal/retry-modal.component';
import { ErrorCodeRoutes } from 'src/common/constant/error-code-routes';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private router: Router, private matdialog: MatDialog) {}

  handleError(error: any) {
    if (error.route === ErrorCodeRoutes.retry) {
      console.warn(error);
      this.openRetryModal();
      return;
    }

    console.error(error);

    if (typeof error.route === 'string') {
      this.router.navigate([error.route]);
      return;
    }

    this.router.navigate([ErrorCodeRoutes.systemError]);
  }

  openRetryModal() {
    const dialogConfig = new MatDialogConfig();

    // 表示するdialogの設定
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';

    this.matdialog.open(RetryModalComponent, dialogConfig);
  }
}
