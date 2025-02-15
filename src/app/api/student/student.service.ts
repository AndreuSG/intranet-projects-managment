import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { API_URLS } from '../../shared/consts';
import { map } from 'rxjs';
import { Student } from '../../models/interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApiService {
  findAll() {
    return this.get(API_URLS.STUDENTS).pipe(map(res => res as Student[]));
  }

  unenrollStudents(idalus: number[]) {
    return this.post(API_URLS.UNENROLL_STUDENTS, idalus);
  }
}
