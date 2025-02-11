import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIcons } from './custom-icons';

@Component({
  selector: 'shared-button',
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true })
  text!: string;

  @Input()
  icon?: string;

  @Input()
  customIcon?: string;

  @Input()
  type: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';

  @Output()
  click = new EventEmitter<void>();

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.registerIcons();
  }

  private registerIcons() {
    for (const icon of CustomIcons) {
      this.iconRegistry.addSvgIconLiteral(icon.name, this.sanitizer.bypassSecurityTrustHtml(icon.svg));
    }
  }

  private colorMap: { [key: string]: string } = {
    primary: '#444466',
    secondary: '#DCDCDC',
    danger: '#9A0C0C',
    success: '#28A745',
  };

  onClick() {
    this.click.emit();
  }

  getButtonColor(): string {
    return this.colorMap[this.type] || this.colorMap['primary'];
  }
}
