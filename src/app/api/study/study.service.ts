import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Study } from '../../models/enums/study.enum';
import { map, Observable } from 'rxjs';
import { API_URLS } from '../../shared/api-routes.const';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudyService extends ApiService {
  authService = inject(AuthService);

  findByTeacher(): Observable<Study[]> {
    return this.get(API_URLS.STUDIES, { teacher: this.authService.getUsername() }).pipe(map((res) => res as Study[]));
  }
}
