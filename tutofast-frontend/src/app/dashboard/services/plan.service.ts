import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Plan} from '../models/plan';
import {catchError, map} from 'rxjs/operators';
import {PlanPage} from '../models/plan-page';

const API_URL = 'http://localhost:8080/api/plans';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  /*
  getClient(): Observable<Plan[]>{
    return this.http.get<Client[]>(this.url)
      .pipe(
        catchError(this.handleError('getClient', []))
      );
  }
  */

  constructor(private http: HttpClient) { }

  getPlanPage(page: number): Observable<any>{
    let url = API_URL + "?page=" + page + "&size=7";
    return this.http.get<any>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
