import { Injectable } from '@angular/core';
import { URLValues } from '../../assets/URLValues';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  constructor(
      private http: HttpClient
  ) { }

  companyListUrl = URLValues.COMPANY_LIST;
  parametersListUrl = URLValues.PARAMETERS;
  bearerId = URLValues.TOKEN_ID;
  saveParamEditUrl = URLValues.PARAM_SAVE;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem(this.bearerId)
    }),
    observe: 'response' as 'response'
  };


  getCompanyList(role) {
    return this.http.get(this.companyListUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // for populating table per parameter and dependency parameter value options
  getParameterOptions(parameterPayloadObj) {
    console.log(parameterPayloadObj);
    return this.http.post(this.parametersListUrl, parameterPayloadObj, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateParameter(payload) {
    return this.http.post(this.saveParamEditUrl, payload, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }



}
