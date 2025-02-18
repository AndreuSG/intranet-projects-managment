import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'theme-selector',
  imports: [
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    setTimeout(() => document.querySelector('html')!.classList.toggle('dark-mode', this.isDarkMode), 250)
    ;
  }
}
