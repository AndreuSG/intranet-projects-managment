import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [CommonModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent {
  dashboardItems = [
    { title: "Control d’assistència", description: "Registra l’assistència de les teves classes.", image: "assets/attendance.jpg", buttonText: "PASSAR LLISTA" },
    { title: "Projectes", description: "Administra els projectes dels teus grups.", image: "assets/projects.jpg", buttonText: "GESTIONAR PROJECTES" },
    { title: "Rúbriques", description: "Gestiona les rúbriques pels teus grups.", image: "assets/rubrics.jpg", buttonText: "GESTIONAR RÚBRIQUES" },
    { title: "Bústia de propostes", description: "Revisa les propostes dels teus alumnes.", image: "assets/proposals.jpg", buttonText: "VEURE PROPOSTES" },
    { title: "Calendari", description: "Estableix les dates d’assignatures i projectes.", image: "assets/calendar.jpg", buttonText: "GESTIONAR CALENDARI" },
    { title: "Informes", description: "Consulta els informes d’assistència i de progrés.", image: "assets/reports.jpg", buttonText: "VEURE INFORMES" }
  ];
}
