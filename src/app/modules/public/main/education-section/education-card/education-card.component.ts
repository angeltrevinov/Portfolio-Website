import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

// ======================= EDUCATION CARD =================
/*
* Component with the template of the education cards, holds
* the information of where i have studied,
* */
@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnChanges {

  @Input() education: any;
  startDate: Date;
  endDate: Date;
  // -------------------------------------------------------
  constructor() { }
  // TODO: ANGULAR METHOS
  // -------------------------------------------------------
  ngOnChanges(changes: SimpleChanges): void {
    if (this.education) {
      this.startDate = new Date(this.education.startDate);
      this.endDate = new Date(this.education.endDate);
    }
  }
}
