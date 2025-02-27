import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../api/project/project.service';
import { ProjectDetail } from '../../../../models/interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, ButtonComponent, ProgressSpinnerModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project?: ProjectDetail;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id')!;
      const tab: 'school' | 'student' = params.get('tab')! as 'school' | 'student';
      if (projectId && tab) {
        this.loadProject(parseInt(projectId), tab);
      }
    });
  }

  loadProject(id: number, tab: 'school' | 'student') {
    this.projectService.findById(id, tab).subscribe({
      next: (project) => {
        this.project = project;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando el proyecto', err);
        this.isLoading = false;
      }
    });
  }

  returnToList() {
    this.router.navigateByUrl('/teacher/projectes');
  }
}
