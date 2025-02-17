import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Project } from '../../../../models/interfaces/project.interface';
import { Studies } from '../../../../models/enums/studies.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [
    CommonModule,
    MatIcon,
    RouterModule,
  ]
})
export class ProjectListComponent {
  @Input()
  search: string = '';

  @Input()
  selectedCourse: string = '';

  projects: Project[] = [
    { id: 1, category: Studies.asix, title: "AWS amb Terraform", creator: "David Bancells" },
    { id: 2, category: Studies.daw, title: "CMS agència de viatges", creator: "Xavier Martín" },
    { id: 3, category: Studies.dvrv, title: "Crear un joc 3D amb Unity", creator: "Ainhowi Zaldúa Sureda" },
    { id: 4, category: Studies.iabd, title: "Ni idea", creator: "Francesc Barragan" },
    { id: 5, category: Studies.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 6, category: Studies.asix, title: "AWS amb Terraform", creator: "David Bancells" },
    { id: 7, category: Studies.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 8, category: Studies.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { id: 9, category: Studies.daw, title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" }
  ];

  filteredProjects: Project[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'] || changes['selectedCourse']) {
      this.searchProjects();
    }
  }

  searchProjects() {
    this.filteredProjects = this.projects
    .filter(project =>
      this.selectedCourse === '' || project.category === this.selectedCourse
    )
    .filter(project =>
      project.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

}
