import { Component, OnDestroy } from '@angular/core';
import { ProjectListComponent } from "../../../components/teacher/projects/project-list/project-list.component";
import { BackButtonComponent } from "../../../shared/components/back-button/back-button.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CourseFilterComponent } from "../../../shared/components/course-filter/course-filter.component";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
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
  providers: [DialogService],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnDestroy {
  search: string = '';
  selectedCourse: string = 'Tots els estudis';

  projectFormDialogRef: DynamicDialogRef<ProjectFormComponent> | undefined;

  constructor(public dialogService: DialogService) {}

  openProjectFormDialog(): void {
    if (this.projectFormDialogRef) return;

    this.projectFormDialogRef = this.dialogService.open(ProjectFormComponent, {
      header: 'Nou projecte',
      width: '400px',
      height: '300px',
      modal: true,
      dismissableMask: true,
      closable: true,
    });

    this.projectFormDialogRef.onClose.subscribe((result: Project | undefined) => {
      if (result) {
        console.log('Proyecto creado:', result);
      }
      this.projectFormDialogRef = undefined;
    });
  }

  ngOnDestroy() {
    if (this.projectFormDialogRef) {
        this.projectFormDialogRef.close();
    }
}
}
