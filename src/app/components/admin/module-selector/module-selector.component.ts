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
import { Studies } from '../../../models/enums/studies.enum';
import { InputText } from 'primeng/inputtext';

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
    TooltipModule,
    InputText,
  ],
  templateUrl: './module-selector.component.html',
  styleUrl: './module-selector.component.scss'
})
export class ModuleSelectorComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  modules: Module[] = [];
  studies: { estudis: Studies}[] = [];

  selectedModules!: Module[];
  selectedCourse: string | undefined;

  loading: boolean = true;

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.moduleService.findAll().subscribe(data => {
      console.log('Modules', data);
      this.modules = data;
      this.studies = [...new Set(this.modules.map(m => m.estudis))].map(estudis => ({ estudis }));
      this.loading = false;
    });

    this.moduleService.findConfirmedModules().subscribe(data => {
      console.log('Confirmed modules', data);
      this.selectedModules = this.modules.filter(m => data.some(sm => sm.idcurriculum === m.idcurriculum && sm.idmodul === m.idmodul));
      console.log('Selected modules', this.selectedModules);
    });
  }

  confirmModules(): void {
    console.log('Confirming modules', this.selectedModules);
    this.moduleService.confirmModules(
      this.selectedModules.map(({ idmodul, idcurriculum }) => ({ idmodul, idcurriculum }))
    ).subscribe(data => {
      console.log('Modules confirmed', data);
    });
  }

  isValidSelection(): boolean {
    if (!this.selectedModules || this.selectedModules.length === 0) return false;

    const studyCount = new Map<string, number>();

    for (const module of this.selectedModules) {
        studyCount.set(module.estudis, (studyCount.get(module.estudis) || 0) + 1);
        if (studyCount.get(module.estudis)! > 1) return false; // Si hay más de un módulo del mismo estudio, retorna false
    }

    const selectedStudies = new Set(this.selectedModules.map(m => m.estudis));
    const allStudies = new Set(this.modules.map(m => m.estudis));

    return selectedStudies.size === allStudies.size;
  }

  onFilterName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.dt1.filter(inputElement.value, 'nom', 'contains');
    }
  }
}
