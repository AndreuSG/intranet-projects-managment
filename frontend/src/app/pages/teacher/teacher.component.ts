import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../../components/teacher-dashboard/teacher-dashboard.component';

@Component({
  selector: 'app-teacher',
  imports: [TeacherDashboardComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {

}
