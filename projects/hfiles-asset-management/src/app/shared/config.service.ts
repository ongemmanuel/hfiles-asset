import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { URLValues } from '../../assets/URLValues';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private tokenVal = URLValues.TOKEN_ID;
  private roleConfigUrl = URLValues.GET_CONFIG_BY_ROLE;
  private appConfigUrl = URLValues.GET_JSON_CONFIG;
  public roleConfiguration;
  public appConfiguration;
  public roleVal;

  constructor(private http: HttpClient) { }

  getConfigurations(role) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(this.tokenVal)
      }),
      observe: 'response' as 'response'
    };
    const roleURL = this.http.get(this.roleConfigUrl + role, httpOptions);
    const appURL = this.http.get(this.appConfigUrl, httpOptions);

    return forkJoin([roleURL, appURL]).pipe(
      map(resp => {
        this.roleVal = role;
        this.roleConfiguration = resp[0].body;
        this.appConfiguration = resp[1].body;
      }),
      catchError(this.handleError)
    );
  }

  getRole() {
    return this.roleVal;
  }

  getRoleData() {
    return this.roleConfiguration;
  }

  getRoleDataAdmin() {
    // console.log(Object.keys(this.roleConfiguration.modules.ADM));
    // return this.roleConfiguration.modules.ADM;
    return Object.keys(this.roleConfiguration.modules.ADM);
  }

  getAppData() {
    return this.appConfiguration;
  }

  getCompanySetupTbl1() {
    return this.appConfiguration.companySetupTbl;
  }

  getCompanySetupTbl2() {
    return this.appConfiguration.companySetupTbl2;
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }


}
