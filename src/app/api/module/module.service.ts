import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Module, SelectedModule } from '../../models/interfaces/module.interface';
import { API_URLS } from '../../shared/consts';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends ApiService {
  findAll(): Observable<Module[]> {
    return this.get(API_URLS.MODULES).pipe(map(res => res as Module[]));
  }

  confirmModules(modules: SelectedModule[]): Observable<SelectedModule[]> {
    return this.post(API_URLS.CONFIRM_MODULES, modules).pipe(map(res => res as SelectedModule[]));
  }

  findConfirmedModules(): Observable<SelectedModule[]> {
    return this.get(API_URLS.CONFIRM_MODULES).pipe(map(res => res as SelectedModule[]));
  }
}
