import { Component, OnInit, Output  } from '@angular/core';

import { ProjectService } from '../../services/project.service'

import { Project } from '../../models/Project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Output() projects:Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
