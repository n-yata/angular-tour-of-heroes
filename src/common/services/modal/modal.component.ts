import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title?: string;
  body?: string;
  closeButton?: string;

  constructor(
    private modal: ModalService,
    private _dialogRef: MatDialogRef<ModalComponent>,
  ) {}

  ngOnInit(): void {
    let param = this.modal.getModalModel();
    this.title = param?.title;
    this.body = param?.body;
    this.closeButton = param?.closeButton;
  }

  /**
   * ダイアログを閉じる
   */
  closeModal() {
    this._dialogRef.close();
  }
}
