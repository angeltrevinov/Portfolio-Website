import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../../../../service/experience.service';

// ===================== EXPERIENCE TABLE ==================
/*
* Component that holds a table with our work experience and
* links to edit or delete them
* */
@Component({
  selector: 'app-experience-table',
  templateUrl: './experience-table.component.html',
  styleUrls: ['./experience-table.component.css']
})
export class ExperienceTableComponent implements OnInit {

  showSpinner: boolean;
  arrExperience: any [];
  // -------------------------------------------------------
  constructor(
    private experienceService: ExperienceService
  ) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    // initialize
    this.showSpinner = true;
    this.arrExperience = [];
    this.reqExperience();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqExperience() {
    this.showSpinner = true;
    this.experienceService.getExperienceAdmin()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrExperience = result;
      }, (error) => {
        this.showSpinner = false;
        console.log(error);
      });
  }

}
