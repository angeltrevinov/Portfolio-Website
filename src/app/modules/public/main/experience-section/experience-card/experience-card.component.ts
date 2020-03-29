import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

// ======================= EXPERIENCE CARD =================
/*
* Component with the template of the experience cards, holds
* the information of where i have work,
* */
@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnChanges {

  @Input() experience: any;
  startDate: Date;
  endDate: Date;

  // -------------------------------------------------------
  constructor() { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnChanges(changes: SimpleChanges): void {
    if (this.experience) {
      this.startDate = new Date(this.experience.startDate);
      this.endDate = new Date(this.experience.endDate);
    }
  }
}
