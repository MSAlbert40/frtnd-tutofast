import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Plan} from '../models/plan';
import {catchError, map} from 'rxjs/operators';
import {PlanPage} from '../models/plan-page';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private url = 'http://localhost:8099/api/plans';

  constructor(private http : HttpClient) { }


  getPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url)
      .pipe(
        catchError(this.handleError('getPlans', []))
      );
  }

  getPageClient(page:number): Observable<PlanPage>{
    var url = this.url;
    url=url+"?"+page + "&size=5";
    return this.http.get<PlanPage>(url)
      .pipe(
        map(response => {
          const data = response;
          console.log(data.content);
          return data ;
        }));
  }



  private handleError<T> (operation = 'operation', result?: T) {
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
