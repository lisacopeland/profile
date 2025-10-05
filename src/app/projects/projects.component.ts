import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.interface';
import { SAMPLE_PROJECTS } from '../shared/sample-data';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
   myProjects: Project[];

   constructor() {}

   ngOnInit(): void {
     this.myProjects = SAMPLE_PROJECTS;
   }
}
