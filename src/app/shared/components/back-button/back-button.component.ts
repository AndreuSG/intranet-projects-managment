import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'back-button',
  imports: [
    MatIconModule,
    ButtonComponent,
  ],
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
