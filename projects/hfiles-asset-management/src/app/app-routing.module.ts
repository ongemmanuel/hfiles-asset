import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamsComponent } from './params/params.component';
import { CompanyComponent } from './company/company.component';
import { GeneralPermissionComponent } from './general-permission/general-permission.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuardService } from './shared/authenticate-guard.service';
import { RoleGuardService } from './shared/role-guard.service';
import { ConfigResolverService } from './shared/config-resolver.service';


const routes: Routes = [
  { path: '', redirectTo: 'admin-management', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-management',
    component: HomeComponent,
    canActivate: [AuthenticateGuardService],
    children: [
      {
        path: 'parameters',
        component: ParamsComponent,
        canActivate: [RoleGuardService],
        data: { role: 'ADM-5' }
      },
      {
        path: 'companySetup',
        component: CompanyComponent
      },
      {
        path: 'generalPermission',
        component: GeneralPermissionComponent,
        canActivate: [RoleGuardService],
        data: { role: 'ADM-3' }
      }
    ]
  },
  { path: '**', redirectTo: 'admin-management', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


