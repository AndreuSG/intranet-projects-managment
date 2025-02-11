import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'theme-selector',
  imports: [
    MatIconModule,
    MatSlideToggleModule,
  ],
  template: `
    <div class="switch-container">
      <mat-icon class="light-icon">light_mode</mat-icon>
      <mat-slide-toggle class="theme-toggle" (change)="toggleTheme()"></mat-slide-toggle>
      <mat-icon class="dark-icon">dark_mode</mat-icon>
    </div>
  `,
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
