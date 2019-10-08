import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { ParamsComponent } from './params/params.component';
import { CompanyComponent } from './company/company.component';
import { GeneralPermissionComponent } from './general-permission/general-permission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyEditFormComponent } from './modal-forms/company-edit-form/company-edit-form.component';
import { KeyToNamePipe } from '../app/general-permission/general-permission-name-map.pipe';
import { ClickStopPropagationDirective } from './shared/stop-propagation.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuardService } from './shared/authenticate-guard.service';
import { RoleSelectionComponent } from './modal-forms/role-selection/role-selection.component';
import { ConfigRoleErrorNotifComponent } from './modal-forms/config-role-error-notif/config-role-error-notif.component';
import { ParameterEditFormComponent } from './modal-forms/parameter-edit-form/parameter-edit-form.component';
import { NotifyDialogComponent } from './shared/notify-dialog/notify-dialog.component';
import { AddCompanyFormComponent } from './modal-forms/add-company-form/add-company-form.component';
import { AngularButtonLoaderModule } from 'angular-button-loader';
import { AddFileComponent } from './shared/add-file/add-file.component';
// import { IsAllowedByPermissionPipe } from './shared/is-allowed-by-permission.pipe';

@NgModule({
  declarations: [
    ClickStopPropagationDirective,
    KeyToNamePipe,
    AppComponent,
    ParamsComponent,
    CompanyComponent,
    GeneralPermissionComponent,
    CompanyEditFormComponent,
    LoginComponent,
    HomeComponent,
    RoleSelectionComponent,
    ConfigRoleErrorNotifComponent,
    ParameterEditFormComponent,
    NotifyDialogComponent,
    AddCompanyFormComponent,
    AddFileComponent,
    // IsAllowedByPermissionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularButtonLoaderModule.forRoot()
  ],
  providers: [AuthenticateGuardService],
  bootstrap: [AppComponent],
  entryComponents: [RoleSelectionComponent, ConfigRoleErrorNotifComponent,
    ParameterEditFormComponent, NotifyDialogComponent, AddCompanyFormComponent, AddFileComponent]
})
export class AppModule { }
