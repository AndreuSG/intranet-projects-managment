import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { Course } from '../../../models/enums/course.enum';

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

  selectedCourse: string = 'Tots els cursos';

  courses = [this.selectedCourse, ...Object.values(Course)];

  courseFilter(course: string) {
    this.selectedCourse = course;
    this.courseSelected.emit(course);
  }
}
