import { Component, OnInit } from '@angular/core';
import {EducationService} from '../../../../service/education.service';

// ==================== EDUCATION TABLE ====================
/*
* Component that holds a table with our education and links
* to edit or delete them
* */
@Component({
  selector: 'app-table-education',
  templateUrl: './table-education.component.html',
  styleUrls: ['./table-education.component.css']
})
export class TableEducationComponent implements OnInit {

  showSpinner: boolean;
  arrEducation: any [];
  // -------------------------------------------------------
  constructor(private educationService: EducationService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.arrEducation = [];
    this.reqEducation();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqEducation() {
    this.showSpinner = true;
    this.educationService.getEducationAdmin()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrEducation = result;
      }, error => {
        this.showSpinner = false;
        console.log(error);
      });
  }
  // -------------------------------------------------------
  onDelete(
    strIdEducation: string
  ) {
    this.educationService.deleteEducation(
      strIdEducation
    ).subscribe(() => {
      this.reqEducation();
    }, error => {
      console.log(error);
    });
  }
}
