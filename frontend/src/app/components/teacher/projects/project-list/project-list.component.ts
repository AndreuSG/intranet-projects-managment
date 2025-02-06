import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [CommonModule, MatIcon]
})
export class ProjectListComponent {
  @Input()
  search: string = '';

  @Input()
  selectedCourse: string = '';

  projects = [
    { category: "ASIX", title: "AWS amb Terraform", creator: "David Bancells" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Xavier Martín" },
    { category: "DViRV", title: "Crear un joc 3D amb Unity", creator: "Ainhowi Zaldúa Sureda" },
    { category: "IAiBD", title: "Ni idea", creator: "Francesc Barragan" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "ASIX", title: "AWS amb Terraform", creator: "David Bancells" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" }
  ];

  filteredProjects = [...this.projects];

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
