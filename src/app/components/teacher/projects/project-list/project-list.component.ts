import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Project } from '../../../../models/interfaces/project.interface';
import { Router, RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [
    CommonModule,
    Card,
    RouterModule,
    ProgressSpinnerModule,
    NgIf
  ]
})
export class ProjectListComponent {
  @Input()
  projects!: Project[];

  @Input()
  isLoading: boolean = true;

  @Input()
  tab: 'school' | 'student' = 'school';
  
  constructor(private router: Router) {}  

  navigateToProject(projectId: number): void {
    this.router.navigate([`/teacher/projectes/${this.tab}`, projectId]);
  }
}
