import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @Output() dialogClose = new EventEmitter<boolean>();

  close(result: boolean): void {
    this.dialogClose.emit(result);
  }
}
