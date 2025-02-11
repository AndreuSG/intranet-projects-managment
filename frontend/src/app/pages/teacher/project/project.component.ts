import { Component } from '@angular/core';
import { ProjectListComponent } from "../../../components/teacher/projects/project-list/project-list.component";
import { BackButtonComponent } from "../../../shared/back-button/back-button.component";
import { SearchBarComponent } from "../../../shared/search-bar/search-bar.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { CourseFilterComponent } from "../../../shared/course-filter/course-filter.component";
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormComponent, ProjectFormData } from '../../../components/teacher/projects/project-form/project-form.component';

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
  filterText: string = 'Tots els cursos';
  search: string = '';
  selectedCourse: string = '';

  constructor(public dialog: MatDialog) {}

  onFilterSelected(course: string) {
    this.selectedCourse = course === 'Tots els cursos' ? '' : course;
    this.filterText = course;
    console.log('Filter selected', course);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '400px',
      data: { title: '', category: '', creator: '' }
    });

    dialogRef.afterClosed().subscribe((result: ProjectFormData | undefined) => {
      if (result) {
        console.log('Proyecto creado:', result);
        // Aquí puedes manejar el proyecto creado, por ejemplo, enviarlo a una API
      }
    });
  }
}
