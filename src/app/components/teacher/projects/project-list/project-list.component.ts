import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Project } from '../../../../models/interfaces/project.interface';
import { Router, RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [
    CommonModule,
    Card,
    RouterModule,
    ProgressSpinnerModule,
    NgIf
  ]
})
export class ProjectListComponent {
  @Input()
  search: string = '';

  @Input()
  selectedCourse: string = 'Tots els estudis';

  @Input()
  projects!: Project[];

  @Input()
  isLoading: boolean = true;

  @Input()
  tab: 'school' | 'student' = 'school';
  
  filteredProjects: Project[] = [];

  constructor(
    private router: Router,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projects'] && this.projects) {
      this.filteredProjects = [...this.projects];
    }
    if (changes['search'] || changes['selectedCourse']) {
      this.searchProjects();
    }
  }  

  searchProjects() {
    this.filteredProjects = this.projects
    .filter(project =>
      this.selectedCourse === 'Tots els estudis' || project.estudi === this.selectedCourse
    )
    .filter(project =>
      project.titol.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  navigateToProject(projectId: number): void {
    this.router.navigate([`/teacher/projectes/${this.tab}`, projectId]);
  }
}
