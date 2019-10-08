import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.css']
})
export class NotifyDialogComponent {

  constructor(
    public notifyRef: MatDialogRef<NotifyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

    onNoClick(): void {
      this.notifyRef.close();
    }

}
