import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { ModalModel } from './modal.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalModel?: ModalModel;

  constructor(private matdialog: MatDialog) {}

  openModal(modalModel: ModalModel, dialogConfig: MatDialogConfig) {
    this.modalModel = modalModel;
    this.matdialog.open(ModalComponent, dialogConfig);
  }

  getModalModel() {
    return this.modalModel;
  }
}
