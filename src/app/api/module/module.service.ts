import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Module } from '../../models/interfaces/module.interface';
import { API_URLS } from '../../shared/consts';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends ApiService {
  findAll(): Observable<Module[]> {
    return this.get(API_URLS.MODULES).pipe(map(res => res as Module[]));
  }
}
