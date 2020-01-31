import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../../../../service/experience.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  showSpinner: boolean;
  arrExperience: any[];

  // -------------------------------------------------------
  constructor(private experienceService: ExperienceService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.arrExperience = [];
    this.reqExperience();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqExperience() {
    this.showSpinner = true;
    this.experienceService.getExperience()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrExperience = result;
      }, (error) => {
        this.showSpinner = false;
        console.log(error);
      });
  }

}
