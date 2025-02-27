import { Component, OnDestroy } from '@angular/core';
import { ProjectListComponent } from "../../../components/teacher/projects/project-list/project-list.component";
import { BackButtonComponent } from "../../../shared/components/back-button/back-button.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CourseFilterComponent } from "../../../shared/components/course-filter/course-filter.component";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectFormComponent } from '../../../components/teacher/projects/project-form/project-form.component';
import { Project, ProjectList } from '../../../models/interfaces/project.interface';
import { StudyService } from '../../../api/study/study.service';
import { Study } from '../../../models/enums/study.enum';
import { ProjectService } from '../../../api/project/project.service';
import { AuthService } from '../../../auth/auth.service';
import { PaginatorModule } from 'primeng/paginator';


@Component({
  selector: 'app-project',
  imports: [
    ProjectListComponent,
    BackButtonComponent,
    SearchBarComponent,
    ButtonComponent,
    CourseFilterComponent,
    PaginatorModule,
  ],
  providers: [DialogService],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnDestroy {
  tab: 'school' | 'student' = 'school';

  allProjects: ProjectList = { centre: [], alumne: [] };
  schoolProjects: Project[] = [];
  studentProjects: Project[] = [];

  isLoading: boolean = true;

  search: string = '';

  selectedStudy: string = 'Tots els estudis';
  studies: Study[] = [];

  projectFormDialogRef: DynamicDialogRef<ProjectFormComponent> | undefined;

  pageSize: number = 12;
  currentPage: number = 0;

  constructor(
    public dialogService: DialogService,
    private studyService: StudyService,
    private projectService: ProjectService,
    private authService: AuthService,
  ) {
    this.loadProjectes();

    this.studyService.findByTeacher().subscribe(studies => {
      this.studies = studies;
    });
  }

  get filteredProjects(): Project[] {
    const projects = this.tab === 'school' ? this.schoolProjects : this.studentProjects;
    
    return projects
      .filter(project =>
        this.selectedStudy === 'Tots els estudis' || project.estudi === this.selectedStudy
      )
      .filter(project =>
        project.titol.toLowerCase().includes(this.search.toLowerCase())
      );
  }

  get paginatedProjects(): Project[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredProjects.slice(start, start + this.pageSize);
  }

  ngOnDestroy() {
    if (this.projectFormDialogRef) {
      this.projectFormDialogRef.close();
    }
  }

  loadProjectes(): void {
    this.projectService.findAll().subscribe((projects) => {
      this.studentProjects = projects.alumne;
      this.schoolProjects = projects.centre;
      this.isLoading = false;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page;
  }

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
        console.log(result);
        this.isLoading = true;
        const projecte = { ...result, creatPer: this.authService.getId() };
        this.projectService.create(projecte, this.tab).subscribe((project) => {
          this.loadProjectes();
        });
      }
      this.projectFormDialogRef = undefined;
    });
  }

  
}
