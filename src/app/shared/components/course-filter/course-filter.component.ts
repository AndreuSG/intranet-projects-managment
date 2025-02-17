import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { Studies } from '../../../models/enums/studies.enum';

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

  defaultCourse: string = 'Tots els estudis';
  selectedCourse: string = this.defaultCourse;

  courses = [this.selectedCourse, ...Object.values(Studies)];

  courseFilter(course: string) {
    this.selectedCourse = course;
    this.courseSelected.emit(course);
  }
}
