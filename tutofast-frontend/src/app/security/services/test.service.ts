import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getTeacherContent(): Observable<any> {
    return this.http.get(API_URL + 'teacher', {responseType: 'text'});
  }

  getStudentContent(): Observable<any> {
    return this.http.get(API_URL + 'student', {responseType: 'text'});
  }

  getAdminContent(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }
}
