import { Routes } from '@angular/router';
import { TeacherComponent } from './pages/teacher/teacher.component';

export const routes: Routes = [
    { path: 'teacher', component: TeacherComponent },
    {path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(mod => mod.AdminComponent) },
];
