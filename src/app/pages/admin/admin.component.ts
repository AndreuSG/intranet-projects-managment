import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonComponent } from "../../shared/components/back-button/back-button.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SearchBarComponent } from "../../shared/components/search-bar/search-bar.component";
import { TableComponent } from "../../shared/components/table/table.component";
import { Student } from '../../models/interfaces/student.interface';
import { Course } from '../../models/enums/course.enum';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [
    MatIconModule,
    BackButtonComponent,
    ButtonComponent,
    SearchBarComponent,
    TableComponent
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  filterText: string = 'Tots els cursos';

  students: Student[] = [
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
    { name: 'Andreu Sánchez Guerrero', course: Course.daw, email: 'asanchez11@sapalomera.cat' },
  ];

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
