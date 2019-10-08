import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../shared/config.service';
import { URLValues } from '../../assets/URLValues';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  vals: Observable<string[]>;
  permToken: string = URLValues.ADMIN_PERMISSION_TOKEN;
  constructor(
    private router: Router,
    private config: ConfigService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.router.navigated) {
      const arrPermissions = this.config.getRoleDataAdmin();
      if (arrPermissions.includes(route.data.role)) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      this.router.navigate(['/admin-management']);
      return false;
    }
  }
}


