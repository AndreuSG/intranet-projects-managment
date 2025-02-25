import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../../components/teacher/teacher-dashboard/teacher-dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgIf } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-teacher',
  imports: [TeacherDashboardComponent, RouterModule, NgIf, Button],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {

  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.setAccessToken(localStorage.getItem('localAuthToken')!);
    this.isAdmin = this.authService.getUserRole() === 'admin';
  }
}
