import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { URLValues } from '../../assets/URLValues';



@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(
    private http: HttpClient,
  ) { }

  logoutUrl: string = URLValues.END_SESSION;

  logout(storageId): Observable<any> {
    const reqOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: localStorage.getItem(storageId)
      }),
      observe: 'response' as 'response'
    };

    return this.http.post(this.logoutUrl, null, reqOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }



}
