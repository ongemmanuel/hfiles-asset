import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateGuardService implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
    ) { }

    canActivate() {
       if (this.loginService.isLoggedInUser()) {
         return true;
       } else {
         this.router.navigate(['/login']);
         return false;
       }
    }

}
