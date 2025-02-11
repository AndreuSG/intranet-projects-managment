import { Component } from '@angular/core';
import { ProjectListComponent } from "../../../components/teacher/projects/project-list/project-list.component";
import { BackButtonComponent } from "../../../shared/components/back-button/back-button.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CourseFilterComponent } from "../../../shared/components/course-filter/course-filter.component";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectFormComponent } from '../../../components/teacher/projects/project-form/project-form.component';
import { Project } from '../../../models/interfaces/project.interface';

@Component({
  selector: 'app-project',
  imports: [
    ProjectListComponent,
    BackButtonComponent,
    SearchBarComponent,
    ButtonComponent,
    CourseFilterComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  search: string = '';
  selectedCourse: string = '';

  projectFormDialogRef: MatDialogRef<ProjectFormComponent, Project> | undefined;

  constructor(public dialog: MatDialog) {}

  onFilterSelected(course: string) {
    this.selectedCourse = course === 'Tots els cursos' ? '' : course;
  }

  openDialog(): void {
    if (this.projectFormDialogRef) return;

    this.projectFormDialogRef = this.dialog.open(ProjectFormComponent, {
      width: '400px',
      data: {
        title: '',
        category: '',
        creator: ''
      }
    });

    this.projectFormDialogRef.afterClosed().subscribe((result: Project | undefined) => {
      if (result) {
        console.log('Proyecto creado:', result);
      }
      this.projectFormDialogRef = undefined;
    });
  }
}
