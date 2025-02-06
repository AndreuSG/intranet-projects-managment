import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'teacher', loadComponent: () => import('./pages/teacher/teacher.component').then(mod => mod.TeacherComponent) },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(mod => mod.AdminComponent) },
  { path: 'projectes', loadComponent: () => import('./components/teacher/projects/project-list/project-list.component').then(mod => mod.ProjectListComponent) },
];
