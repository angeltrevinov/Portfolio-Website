import { Component, OnInit } from '@angular/core';
import {EducationService} from '../../../../service/education.service';
import {error} from 'util';

// =================== EDUCATION SECTION ===================
/*
* Component that holds the cards for our education
* */
@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {
  showSpinner: boolean;
  arrEducation: any[];
  // -------------------------------------------------------
  constructor(private educationService: EducationService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.arrEducation = [];
    this.reqEducation();
  }
  // -------------------------------------------------------
  reqEducation() {
    this.showSpinner = true;
    this.educationService.getEducation()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrEducation = result;
      }, (error) => {
        this.showSpinner = false;
        console.log(error);
      });
  }

}
