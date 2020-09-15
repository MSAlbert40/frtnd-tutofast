import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User, UserPage} from '../models/user';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent){
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later');
  }

  constructor(private http: HttpClient) { }

  // List User
  getUser(page: number): Observable<UserPage>{
    const exe = '?' + 'page=' + page + '&' + 'size=5';
    return this.http.get<UserPage>(environment.apiURL + '/roles' + '/' + 2 + '/users' + exe);
  }

  // Update User
  updateUse(id, item): Observable<User>{
    return this.http.put<User>(environment.apiURL + '/users' + '/' + id, JSON.stringify(item), this.httpOptions).pipe(
      catchError(this.handleError));
  }
}
