import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './retry-modal.component.html',
  styleUrls: ['./retry-modal.component.css'],
})
export class RetryModalComponent implements OnInit {
  constructor(public _dialogRef: MatDialogRef<RetryModalComponent>) {}

  ngOnInit(): void {}

  /**
   * ダイアログを閉じる
   */
  closeModal() {
    this._dialogRef.close();
  }
}
