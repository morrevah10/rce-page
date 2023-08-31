import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContantComponent } from '../dialog-contant/dialog-contant.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  isconfirmed = false

  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContantComponent, {
      data: { isconfirmed: this.isconfirmed }, 
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.isconfirmed = result;
      console.log(`Dialog result: ${result}`);
    });
  }
}

