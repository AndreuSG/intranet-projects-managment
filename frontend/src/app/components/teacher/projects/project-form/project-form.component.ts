import { Component, Inject } from '@angular/core';
import { Course } from '../../../../models/enums/course.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

export interface ProjectFormData {
  title: string;
  category: Course;
  creator: string;
}

@Component({
  selector: 'project-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {
  titleControl: FormControl;
  categoryControl: FormControl;
  creatorControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<ProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectFormData
  ) {
    this.data = this.data || { title: '', category: '', creator: '' };

    this.titleControl = new FormControl(this.data.title, Validators.required);
    this.categoryControl = new FormControl(this.data.category, Validators.required);
    this.creatorControl = new FormControl(this.data.creator, Validators.required);
  }

  onSubmit() {
    if (this.titleControl.valid && this.categoryControl.valid && this.creatorControl.valid) {
      this.dialogRef.close({
        title: this.titleControl.value,
        category: this.categoryControl.value,
        creator: this.creatorControl.value
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
