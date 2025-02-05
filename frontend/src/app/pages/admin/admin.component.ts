import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonComponent } from "../../shared/back-button/back-button.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { SearchBarComponent } from "../../shared/search-bar/search-bar.component";

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [
    MatIconModule,
    BackButtonComponent,
    ButtonComponent,
    SearchBarComponent
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  filterText: string = 'Tots els cursos';

  addStudent() {
    console.log('Agregar estudiante');
  }

  filterStudents() {
    console.log('Filtrar estudiantes');
  }

  deleteStudents() {
    console.log('Eliminar estudiantes');
  }

  onSearch(value: string) {
    console.log('Texto de búsqueda:', value);
  }
}
