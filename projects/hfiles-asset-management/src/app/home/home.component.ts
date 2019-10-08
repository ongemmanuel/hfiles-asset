import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleSelectionComponent } from '../modal-forms/role-selection/role-selection.component';
import { ConfigService } from '../shared/config.service';
import { LogoutService } from '../shared/logout.service';
import { URLValues } from '../../../../hfiles-asset-management/src/assets/URLValues';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  bearerId: string = URLValues.TOKEN_ID;
  permToken: string = URLValues.ADMIN_PERMISSION_TOKEN;
  openSideNav = false;
  menus = [];
  usrData: string;
  roleData: string[];

  constructor(
    public roleSelectDialog: MatDialog,
    private loginService: LoginService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private config: ConfigService,
    private logoutService: LogoutService
  ) { }

  ngOnInit() {
    this.spinner.show('homeSpinner');
    this.loginService.getUserCred().subscribe(
      resp => {
        if (resp.status === 200 && resp.statusText === 'OK') {
          this.selectRoleDialog(resp.body);
        }
      },
      error => {
      }
    );
  }

  selectRoleDialog(userData) {
    console.log(userData);
    this.usrData = userData;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = userData.roles;

    this.roleSelectDialog.open(RoleSelectionComponent, dialogConfig).afterClosed()
      .subscribe(resp => {
        if (resp) {
          this.buildApp();
        }
      });
    this.spinner.hide('homeSpinner');
  }

  buildApp() {
    this.menus = this.config.getAppData().menu;
    this.roleData = this.config.getRoleDataAdmin();
    localStorage.setItem(this.permToken, JSON.stringify(this.config.getRoleDataAdmin()));
    console.log(this.config.getRoleDataAdmin());
    this.openSideNav = true;
  }

  logout() {
    this.spinner.show('homeSpinner');
    this.logoutService.logout(this.bearerId).subscribe(
      resp => this.redirectToLogin(),
      error => {
        this.spinner.hide('homeSpinner');
        console.log('ERROR');
      });
  }

  refresh() {
    window.location.reload();
  }

  checkIfAllowed(value) {
    return this.roleData.includes(value);
  }

  private redirectToLogin() {
    localStorage.removeItem(this.bearerId);
    this.spinner.hide('homeSpinner');
    this.router.navigate(['/login']);
  }

}

