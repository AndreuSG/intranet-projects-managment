import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../api/project/project.service';
import { ProjectDetail } from '../../../../models/interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, ButtonComponent],
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
      if (projectId) {
        this.loadProject(parseInt(projectId));
      }
    });
  }

  loadProject(id: number) {
    this.projectService.findById(id).subscribe({
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
