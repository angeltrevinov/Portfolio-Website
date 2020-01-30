import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../service/project.service';

// ====================== PROJECTS TABLE ===================
/*
* Component that holds a table with our projects and links
* to edit them or delete them
* */
@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {

  showSpinner: boolean;
  arrProjects: any [];
  // -------------------------------------------------------
  constructor(private projectService: ProjectService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {

    // initialize
    this.showSpinner = true;
    this.arrProjects = [];

    this.reqProjects();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqProjects() {
    this.showSpinner = true;
    this.projectService.getProjectsAdmin()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrProjects = result;
    }, (error) => {
        this.showSpinner = false;
        console.log(error);
    });
  }
  // -------------------------------------------------------
  onDelete(
    strProjectId: string
  ) {
   this.projectService.deleteProject(
     strProjectId
   ).subscribe(() => {
     this.reqProjects();
   }, (error) => {
     console.log(error);
   });
  }
}
