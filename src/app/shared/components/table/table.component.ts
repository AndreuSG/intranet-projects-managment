import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Student } from '../../../models/interfaces/student.interface';
import { Button } from 'primeng/button';

@Component({
  selector: 'shared-table',
  imports: [
    CommonModule,
    TableModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() 
  students: Student[] = [];

  @Input({required: true}) 
  type!: 'admin' | 'attendance';

  @Output()
  changeStudentsSelected: EventEmitter<Student[]> = new EventEmitter<Student[]>();

  selectedStudents: Student[] = [];

  getColumns(): {field: string, header: string }[] {
    if (this.type === 'admin') {
      return [
        { field: 'idalu', header: 'IDALU' },
        { field: 'nom_complet', header: 'Nom complet' },
        { field: 'email', header: 'Email' },
      ];
    }

    return [];
  }

  onSelectionChange() {
    this.changeStudentsSelected.emit(this.selectedStudents);
  }
}
