import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfigService } from '../../shared/config.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigRoleErrorNotifComponent } from '../config-role-error-notif/config-role-error-notif.component';

export interface AdminRole {
  roleId: string;
  roleName: string;
}


@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})

export class RoleSelectionComponent implements OnInit {

  radiobtns: AdminRole[];
  roleSelectGroup: FormGroup;

  constructor(
    // private errorNotif: ConfigRoleErrorNotifComponent,
    private spinner: NgxSpinnerService,
    private config: ConfigService,
    public dialogRef: MatDialogRef<RoleSelectionComponent>,
    public errorDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: AdminRole[],
    fb: FormBuilder) {
    this.roleSelectGroup = fb.group({
      selectedRole: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.radiobtns = this.data;
  }

  onSubmit(value) {
    this.spinner.show('homeSpinner');
    this.config.getConfigurations(value.selectedRole).subscribe(
      resp => {
        this.dialogRef.close(true);
        this.spinner.hide('homeSpinner');
      },
      error => {
        this.dialogRef.close(false);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.errorDialog.open(ConfigRoleErrorNotifComponent, dialogConfig);
        this.spinner.hide('homeSpinner');
      });
  }


}
