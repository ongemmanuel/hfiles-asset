import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { URLValues } from '../../assets/URLValues';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  isLoginError = false;
  noti: string;
  tokenId = URLValues.TOKEN_ID;
  bearerToken: string;
  getLoginBearer: string;
  userData: any;
  alreadyLogin: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return 'Field is required';
  }

  keyDown(event: any) {
    this.isLoginError = false;
  }

  onSubmit(input: { username: string, password: string }) {
    this.spinner.show('loginSpinner');
    if (this.loginGroup.valid) {
      this.loginService.authenticateLogin(input).subscribe(
        response => {
          this.isLoginError = false;
          if (response.status === 200 && response.statusText === 'OK') {
            localStorage.setItem(this.tokenId, response.headers.get('Authorization'));
            this.router.navigate(['/']);
            this.spinner.hide('loginSpinner');
          } else {
  
          }
        },
        error => {
          this.isLoginError = true;
          this.noti = error;
          this.spinner.hide('loginSpinner');
        });
    } else {
      this.spinner.hide('loginSpinner');
    }


  }

}
