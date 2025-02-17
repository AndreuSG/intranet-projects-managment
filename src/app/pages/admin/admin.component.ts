import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonComponent } from "../../shared/components/back-button/back-button.component";
import { SearchBarComponent } from "../../shared/components/search-bar/search-bar.component";
import { TableComponent } from "../../shared/components/table/table.component";
import { Button } from "primeng/button";
import { Student } from '../../models/interfaces/student.interface';
import { Studies } from '../../models/enums/studies.enum';
import { ModuleSelectorComponent } from "../../components/admin/module-selector/module-selector.component";
import { CourseFilterComponent } from "../../shared/components/course-filter/course-filter.component";
import { StudentService } from '../../api/student/student.service';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [
    MatIconModule,
    BackButtonComponent,
    Button,
    SearchBarComponent,
    TableComponent,
    ModuleSelectorComponent,
    CourseFilterComponent
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [...this.students];
  selectedStudents: Student[] = [];

  searchQuery: string = '';
  selectedStudy: string = '';

  loading: boolean = true;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.findAll().subscribe(students => {
      this.students = students;
      this.filteredStudents = [...students];
      this.loading = false;
    });
  }

  unenrollStudents() {
    this.studentService.unenrollStudents(this.selectedStudents.map(student => student.idalu)).subscribe(() => {
      this.students = this.students.filter(student => !this.selectedStudents.includes(student));
      this.filteredStudents = [...this.students];
      this.selectedStudents = [];
    });
  }

  onFilter(value: string) {
    this.selectedStudy = value;
    this.applyFilters();
  }

  // Método de búsqueda
  onSearch(value: string) {
    this.searchQuery = value.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredStudents = this.students.filter(student => {
      const matchesSearch = this.searchQuery
      ? student.nom_complet.toLowerCase().includes(this.searchQuery) || 
        student.email.toLowerCase().includes(this.searchQuery) || 
        student.idalu.toString().includes(this.searchQuery)
      : true;

      const matchesCourse = (this.selectedStudy === 'Tots els estudis' || !this.selectedStudy) 
      ? true 
      : student.studies === this.selectedStudy;
      
      return matchesSearch && matchesCourse;
    });
  }
}
