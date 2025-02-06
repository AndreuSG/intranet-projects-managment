import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../../../shared/back-button/back-button.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [CommonModule, BackButtonComponent, MatIcon]
})
export class ProjectListComponent {
  projects = [
    { category: "ASIX", title: "AWS amb Terraform", creator: "David Bancells" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Xavier Martín" },
    { category: "Videojocs", title: "Crear un joc 3D amb Unity", creator: "Ainhowi Zaldúa Sureda" },
    { category: "IA", title: "Ni idea", creator: "Francesc Barragan" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "ASIX", title: "AWS amb Terraform", creator: "David Bancells" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" },
    { category: "DAW", title: "CMS agència de viatges", creator: "Ainhowi Zaldúa Sureda" }
  ];
}
