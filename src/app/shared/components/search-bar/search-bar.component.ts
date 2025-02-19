import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';

import { InputIconModule } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-bar',
  imports: [
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputText,
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input()
  placeholder!: string;

  @Output()
  search = new EventEmitter<string>();

  searchQuery: string = '';

  onSearch(event: Event) {
    this.search.emit(this.searchQuery);
  }
}
