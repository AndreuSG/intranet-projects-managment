import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'teacher', loadComponent: () => import('./pages/teacher/teacher.component').then(mod => mod.TeacherComponent) },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(mod => mod.AdminComponent) },
  { path: 'projectes', loadComponent: () => import('./pages/teacher/project/project.component').then(mod => mod.ProjectComponent) },
  { path: 'projectes/:id', loadComponent: () => import('./pages/teacher/project/project-detail/project-detail.component').then(mod => mod.ProjectDetailComponent) },
];
