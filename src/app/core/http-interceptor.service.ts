import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.httpHeaderAddToken(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 200 && event.body.token) {
            localStorage.setItem('localAuthToken', event.body.token);
          }
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }
  

  private httpHeaderAddToken(request: HttpRequest<any>): HttpRequest<any> {
    // Obtén los headers existentes
    let headers = request.headers;
  
    // Si el body no es FormData, agrega el content-type
    if (!(request.body instanceof FormData)) {
      headers = headers.set('content-type', 'application/json');
    }
  
    // Obtén el token de localStorage
    const token: string | null = localStorage.getItem('localAuthToken');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    // Clona la request con los headers actualizados
    return request.clone({ headers });
  }

  private handleError(error: HttpErrorResponse) {
    const result: { [k: string]: any } = {};
    result['status'] = error.status;
    result['message'] = error.message;

    if (result['message']) {
      return throwError(() => result);
    }
    return throwError(() => 'Service error. Try again later.');
  }
}