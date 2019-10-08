import { Injectable } from '@angular/core';
import { URLValues } from '../../assets/URLValues';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralPermissionService {
  allSelectedValuesUrl: string = URLValues.GEN_PERMISSION_SELECTED_VALUES;
  companyCheckboxListUrl: string = URLValues.GEN_PERMISSION_COMPANY_LIST; // + selectedRole
  roleSaveUrl: string = URLValues.GEN_PERMISSION_ROLE_SAVE;
  bearerId = URLValues.TOKEN_ID;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem(this.bearerId)
    }),
    observe: 'response' as 'response'
  };

  constructor(private http: HttpClient) { }

  getCompanyListAndCheckedValues(selectedRole) {
    const checkedValURL = this.http.get(this.allSelectedValuesUrl, this.httpOptions);
    const compListURL = this.http.get(this.companyCheckboxListUrl + selectedRole, this.httpOptions);

    return forkJoin([checkedValURL, compListURL]).pipe(catchError(this.handleError));
  }

  saveRoleData(value) {
    return this.http.post(this.roleSaveUrl, value, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }

}
