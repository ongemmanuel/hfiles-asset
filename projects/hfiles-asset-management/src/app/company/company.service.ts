import { Injectable } from '@angular/core';
import { URLValues } from '../../assets/URLValues';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  bearerId = URLValues.TOKEN_ID;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem(this.bearerId)
    }),
    observe: 'response' as 'response'
  };
  companyDetailsUrl: string = URLValues.COMPANY_TAB; // + selectedRole
  companyElemUrl: string = URLValues.COMPANY_ELEM; // + selectedCompId
  companyEditUrl: string = URLValues.COMPANY_EDIT; // + selectedCompId
  companyAddUrl: string = URLValues.COMPANY_ADD; // + selectedRole
  companyAddByBatchUrl: string = URLValues.COMPANY_ADD_BATCH;
  companyCheckIfAvailable: string = URLValues.CHECK_COMPANY_ID; // + company Id used
  companyTemplateLink: string = URLValues.COMPANY_TEMPLATE;


  constructor(private http: HttpClient) { }

  getCompanyTemplateLink() {
    return this.companyTemplateLink;
  }

  getCompanyData(selectedRole) {
    return this.http.get(this.companyDetailsUrl + selectedRole, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getCompanyEdit(selectedRole) {
    return this.http.get(this.companyEditUrl + selectedRole, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  checkId(idUsed) {
    return this.http.get(this.companyCheckIfAvailable + idUsed, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addCompany(selectedRole, companyDetails) {
    console.log(this.companyAddUrl);
    console.log(companyDetails);
    return this.http.post(this.companyAddByBatchUrl + selectedRole, companyDetails, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addCompanyByBatch(file) {
    return this.http.post(this.companyAddUrl, file, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }

}
