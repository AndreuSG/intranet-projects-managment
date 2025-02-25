import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Project } from '../../../../models/interfaces/project.interface';
import { Study } from '../../../../models/enums/study.enum';
import { Router, RouterModule } from '@angular/router';
import { Card } from 'primeng/card';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [
    CommonModule,
    Card,
    RouterModule,
  ]
})
export class ProjectListComponent {
  @Input()
  search: string = '';

  @Input()
  selectedCourse: string = 'Tots els estudis';

  projects: Project[] = [
    { id: 1, study: Study.asix, title: "AWS amb Terraform", creator: "David Bancells" },
    { id: 2, study: Study.daw, title: "CMS agència de viatges", creator: "Xavier Martín" },
    { id: 3, study: Study.dvrv, title: "Crear un joc 3D amb Unity", creator: "Ainhowi Zaldúa Sureda" },
    { id: 4, study: Study.iabd, title: "Ni idea", creator: "Francesc Barragan" },
    { id: 5, study: Study.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 6, study: Study.asix, title: "AWS amb Terraform", creator: "David Bancells" },
    { id: 7, study: Study.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 8, study: Study.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 9, study: Study.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" }
  ];

  filteredProjects: Project[] = [];

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'] || changes['selectedCourse']) {
      this.searchProjects();
    }
  }

  searchProjects() {
    this.filteredProjects = this.projects
    .filter(project =>
      this.selectedCourse === 'Tots els estudis' || project.study === this.selectedCourse
    )
    .filter(project =>
      project.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  navigateToProject(projectId: number): void {
    this.router.navigate(['/teacher/projectes', projectId]);
  }
}
