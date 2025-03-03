import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-bar',
  imports: [
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input()
  placeholder!: string;

  @Output()
  search = new EventEmitter<string>();

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.search.emit(value || '');
      });
  }
}
