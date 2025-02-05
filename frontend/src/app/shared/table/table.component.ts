import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'shared-table',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() type: 'admin' | 'attendance' = 'admin';

  getColumns(): string[] {
    if (this.type === 'admin') {
      return ['select', 'name', 'course', 'email', 'edit'];
    } else if (this.type === 'attendance') {
      return ['attendance', 'absence', 'delay', 'photo', 'student', 'percentAbsences', 'report'];
    }
    return Object.keys(this.data[0] || {});
  }
}
