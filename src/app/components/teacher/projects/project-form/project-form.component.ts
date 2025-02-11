import { Component, Inject } from '@angular/core';
import { Course } from '../../../../models/enums/course.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../models/interfaces/project.interface';

@Component({
  selector: 'project-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'} }
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {
  titleControl: FormControl;
  categoryControl: FormControl;
  creatorControl: FormControl;

  validCourses = Object.values(Course);

  constructor(
    public dialogRef: MatDialogRef<ProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {
    this.titleControl = new FormControl(this.data.title, Validators.required);
    this.categoryControl = new FormControl(this.data.category, [Validators.required, this.validCourseValidator.bind(this)]);
    this.creatorControl = new FormControl(this.data.creator, Validators.required);
  }

  validCourseValidator(control: AbstractControl): ValidationErrors | null {
    if (!this.validCourses.includes(control.value)) {
      return { invalidCourse: true };
    }
    return null;
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
