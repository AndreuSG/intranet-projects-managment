import { Routes } from '@angular/router';
import { RoleGuard } from './core/role.guard';
export const routes: Routes = [
  { 
    path: 'teacher', 
    loadChildren: () => import('./routes/teacher.routes').then(r => r.TEACHER_ROUTES),
    canActivate: [RoleGuard],
    data: { roles: ['profe'] }
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./pages/admin/admin.component').then(mod => mod.AdminComponent),
    canActivate: [RoleGuard],
    data: { roles: ['admin'] }
  },
];
