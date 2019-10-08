import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogoutService } from '../../shared/logout.service';
import { URLValues } from '../../../assets/URLValues';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-config-role-error-notif',
  templateUrl: './config-role-error-notif.component.html',
  styleUrls: ['./config-role-error-notif.component.css']
})
export class ConfigRoleErrorNotifComponent implements OnInit {

  bearerId: string = URLValues.TOKEN_ID;

  constructor(
    public dialogRef: MatDialogRef<ConfigRoleErrorNotifComponent>,
    private logoutService: LogoutService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  returnToLogin() {
    this.spinner.show('homeSpinner');
    this.dialogRef.close();
    this.logoutService.logout(this.bearerId).subscribe(
      resp => this.redirectToLogin(),
      error => {
        this.spinner.hide('homeSpinner');
        console.log('ERROR');
      });
  }


  private redirectToLogin() {
    localStorage.removeItem(this.bearerId);
    this.spinner.hide('homeSpinner');
    this.router.navigate(['/login']);
  }

}
