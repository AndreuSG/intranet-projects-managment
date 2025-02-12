import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../models/interfaces/api-response.interface';
import { Project, ProjectDetail } from '../../models/interfaces/project.interface';
import { API_URLS } from '../../shared/consts';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiService {
  findAll(): Observable<ApiResponse<Project[]>> {
    return this.get(API_URLS.PROJECTS).pipe(map((res) => res as ApiResponse<Project[]>));
  }

  findById(id: number): Observable<ApiResponse<ProjectDetail>> {
    return this.get(`${API_URLS.PROJECTS}/${id}`).pipe(map((res) => res as ApiResponse<ProjectDetail>));
  }

  create(project: Project): Observable<ApiResponse<Project>> {
    return this.post(API_URLS.PROJECTS, project).pipe(map((res) => res as ApiResponse<Project>));
  }

  update(project: ProjectDetail): Observable<ApiResponse<ProjectDetail>> {
    return this.put(`${API_URLS.PROJECTS}/${project.id}`, project).pipe(map((res) => res as ApiResponse<ProjectDetail>));
  }
}
