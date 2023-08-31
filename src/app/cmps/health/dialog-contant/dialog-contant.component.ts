import { Component, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-contant',
  templateUrl: './dialog-contant.component.html',
  styleUrls: ['./dialog-contant.component.css']
})
export class DialogContantComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialogRef: MatDialogRef<DialogContantComponent>) {}

  onConfirm() {
    this.confirmed.emit(true);
    this.dialogRef.close(); // Close the dialog
  }

  onCancel() {
    // this.confirmed.emit(false);
    this.dialogRef.close();
  }
}