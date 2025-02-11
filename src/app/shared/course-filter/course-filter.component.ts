import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-course-filter',
  imports: [
    ButtonComponent,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.scss'
})
export class CourseFilterComponent {
  @Output()
  courseSelected = new EventEmitter<string>();

  selectedCourse: string = 'Filtrar per curs';

  courses = [
    'Tots els cursos',
    'DAW',
    'ASIX',
    'SMX',
    'IAiBD',
    'DViRV'
  ]

  courseFilter(course: string) {
    this.selectedCourse = course;
    this.courseSelected.emit(course);
  }
}
