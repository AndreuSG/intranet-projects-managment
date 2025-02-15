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
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-module-selector',
  imports: [
    ButtonModule,
    Popover,
    TableModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    Select,
    TooltipModule
  ],
  templateUrl: './module-selector.component.html',
  styleUrl: './module-selector.component.scss'
})
export class ModuleSelectorComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  modules: Module[] = [
    { curriculum: 'C24', nom: 'Sistemes Informatics', sigles: 'SI', estudis: 'ASIX'},
    { curriculum: 'C24', nom: 'Sistemes Informatics Dinamics', sigles: 'SID', estudis: 'DAW'},
    { curriculum: 'C24', nom: 'Sistemes', sigles: 'S', estudis: 'SMX'},
  ];

  studies = [...new Set(this.modules.map(m => m.estudis))].map(estudis => ({ estudis }));

  selectedModules!: Module[];
  selectedCourse: string | undefined;

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.moduleService.findAll().subscribe(data => {
      this.modules = data;
    });
  }

  confirmModules(): void {
    console.log(this.selectedModules);
    this.moduleService.confirmModules(this.selectedModules).subscribe(data => {
      this.modules = data;
    });
  }

  isValidSelection(): boolean {
    if (!this.selectedModules || this.selectedModules.length === 0) return false;
  
    const selectedStudies = new Set(this.selectedModules.map(m => m.estudis));
    const allStudies = new Set(this.modules.map(m => m.estudis));
  
    return selectedStudies.size === allStudies.size;
  }
}
