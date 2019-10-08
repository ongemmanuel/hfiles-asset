import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, TimeoutError  } from 'rxjs';
import { catchError, concatMap,  } from 'rxjs/operators';
import { URLValues } from '../../assets/URLValues';


@Injectable({
  providedIn: 'root',
})

export class LoginService {
  loginURL = URLValues.LOGIN_URL;
  accessURL = URLValues.ACCESS_URL;
  userUrl = URLValues.GET_USER_DATA_URL;
  bearerId = URLValues.TOKEN_ID;
  configUrl = 'assets/config.json';
  isLog = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.bearerId
    }),
    observe: 'response' as 'response'
  };

  constructor(private http: HttpClient) { }

  authenticateLogin(inputVal): Observable<any> {
    console.log(this.httpOptions);
    return this.http.post(this.loginURL, inputVal, this.httpOptions).pipe(
      concatMap(res => this.getAccess(res)),
      catchError(this.handleError)
    );
  }

  private getAccess(response) {
    if (response.body.action === 'PROCEED') {
      const reqOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: response.headers.get('Authorization')
        }),
        observe: 'response' as 'response'
      };
      return this.http.get(this.accessURL, reqOptions).pipe(
        catchError(this.handleError)
      );
    } else {
      return throwError({ statusText: response.body.msg });
    }
  }

 getUserCred() {
    const reqOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(this.bearerId)
      }),
      observe: 'response' as 'response'
    };
    return this.http.get(this.userUrl, reqOptions).pipe(
          catchError(this.handleError)
    );
  }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal.statusText);
  }

  isLoggedInUser(): boolean {
    return localStorage.getItem(this.bearerId) != null;
  }

}


