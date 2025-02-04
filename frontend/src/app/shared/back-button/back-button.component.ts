import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const BACK_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path d="M3.75 18.75V16.25H12.625C13.9375 16.25 15.0781 15.8333 16.0469 15C17.0156 14.1667 17.5 13.125 17.5 11.875C17.5 10.625 17.0156 9.58333 16.0469 8.75C15.0781 7.91667 13.9375 7.5 12.625 7.5H4.75L8 10.75L6.25 12.5L0 6.25L6.25 0L8 1.75L4.75 5H12.625C14.6458 5 16.3802 5.65625 17.8281 6.96875C19.276 8.28125 20 9.91667 20 11.875C20 13.8333 19.276 15.4688 17.8281 16.7812C16.3802 18.0938 14.6458 18.75 12.625 18.75H3.75Z" fill="#444466"/>
  </svg>
`

@Component({
  selector: 'back-button',
  imports: [MatIconModule],
  template: `
    <button mat-icon-button class="back-button" (click)="goBack()">
      <mat-icon svgIcon="back"></mat-icon>
      Tornar enrere
    </button>
  `,
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
  constructor(private location: Location) {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral('back', sanitizer.bypassSecurityTrustHtml(BACK_ICON));
  }

  goBack(): void {
    this.location.back();
  }
}
