import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarModel } from 'src/common/services/snack-bar/snack-bar.model';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;

  /**
   * スナックバーを表示する
   * @param param スナックバーモデル
   */
  openSnackBar(param: SnackBarModel) {
    this.snackBar.open(param.message, param.action, {
      duration: param.duration,
      horizontalPosition: param.horizontal as MatSnackBarHorizontalPosition,
      verticalPosition: param.vertical as MatSnackBarVerticalPosition,
      panelClass: param.panelClass,
    });
  }
}
