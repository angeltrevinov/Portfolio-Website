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
  /* Angular methods */
  // -------------------------------------------------------
  ngOnInit() {

    // initialize
    this.showSpinner = true;
    this.arrProjects = [];

    this.reqProjects();
  }
  /* Service methods */
  // -------------------------------------------------------
  reqProjects() {
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
