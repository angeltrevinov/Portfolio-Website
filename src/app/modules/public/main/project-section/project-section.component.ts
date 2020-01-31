import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../service/project.service';

// ====================== PROJECT SECTION ==================
/*
* Component that holds the projects and ask for them
* to the server.
* */
@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {

  showSpinner: boolean;
  arrProjects: any [];

  // -------------------------------------------------------
  constructor(private projectService: ProjectService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.arrProjects = [];

    this.reqProjects();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqProjects() {
    this.showSpinner = true;
    this.projectService.getProjects()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrProjects = result;
      }, (error) => {
        this.showSpinner = false;
        console.log(error);
      });
  }
}
