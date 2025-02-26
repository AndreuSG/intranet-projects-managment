import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Study } from '../../../models/enums/study.enum';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';

@Component({
  selector: 'shared-course-filter',
  imports: [
    Button,
    MatMenuModule,
    CommonModule,
    Menu,
  ],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.scss'
})
export class CourseFilterComponent {
  @Output()
  courseSelected = new EventEmitter<string>();

  @Input()
  studies: Study[] = [];

  defaultStudy: string = 'Tots els estudis';
  selectedStudy: string = this.defaultStudy;
  studiesList!: MenuItem[];

  constructor() {
    this.studiesList = [this.selectedStudy, ...this.studies].map(item => {
      if (item === this.defaultStudy) {
        return { label: item, disabled: true, command: () => this.courseFilter(item) }
      } 
      return { label: item, command: () => this.courseFilter(item) }
    });
  }

  courseFilter(study: string) {
    this.selectedStudy = study;

    this.studiesList.map(item => item.disabled = false);
    this.studiesList.find(item => item.label === study)!.disabled = true;

    this.courseSelected.emit(study);
  }
}
