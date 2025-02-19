import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../shared/consts';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  get(route: string, params?: {}): Observable<any> {
    return this.http.get(environment.apiBaseUrl + route, { params }).pipe(map((res) => res || {}));
  }

  post(route: string, body: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + route, body).pipe(map((res) => res || {}));
  }

  put(route: string, body?: any): Observable<any> {
    return this.http.put(environment.apiBaseUrl + route, body).pipe(map((res) => res || {}));
  }

  del(route: string): Observable<any> {
    return this.http.delete(environment.apiBaseUrl + route).pipe(map((res) => res || {}));
  }
}
