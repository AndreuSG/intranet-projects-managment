import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, Observable } from 'rxjs';
import { Project, ProjectDetail } from '../../models/interfaces/project.interface';
import { API_URLS } from '../../shared/api-routes.const';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiService {
  findAll(): Observable<Project[]> {
    return this.get(API_URLS.PROJECTS).pipe(map((res) => res as Project[]));
  }

  findById(id: number): Observable<ProjectDetail> {
    return this.get(`${API_URLS.PROJECTS}/${id}`).pipe(map((res) => res as ProjectDetail));
  }

  create(project: Project): Observable<Project> {
    return this.post(API_URLS.PROJECTS, project).pipe(map((res) => res as Project));
  }

  update(project: ProjectDetail): Observable<ProjectDetail> {
    return this.put(`${API_URLS.PROJECTS}/${project.id}`, project).pipe(map((res) => res as ProjectDetail));
  }
}
