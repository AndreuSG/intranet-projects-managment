import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { Table, TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Module } from '../../../models/interfaces/module.interface';
import { ModuleService } from '../../../api/module/module.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-module-selector',
  imports: [
    ButtonModule,
    Popover,
    TableModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    Select
  ],
  templateUrl: './module-selector.component.html',
  styleUrl: './module-selector.component.scss'
})
export class ModuleSelectorComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  modules!: Module[];
  courses = [
    { name: 'DAM' },
    { name: 'DAW' },
    { name: 'ASIX' },
    { name: 'SMX' },
  ];

  selectedModules!: Module;
  selectedCourse: string | undefined;

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.moduleService.findAll().subscribe(data => {
      console.log(data);
      this.modules = data;
    });
  }

  onFilterGlobal(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }
}
