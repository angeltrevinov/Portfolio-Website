import { Component, OnInit } from '@angular/core';
import {TechnologyService} from '../../../../service/technology.service';

// =================== TECHNOLOGIES SECTION ================
/*
* Component that holds the technologies and ask for them
* to the server.
* */
@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.css']
})
export class TechnologiesSectionComponent implements OnInit {

  showSpinner: boolean;
  arrTec: any [];

  // -------------------------------------------------------
  constructor(
    private technologyService: TechnologyService
  ) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit(): void {
    this.arrTec = [];
    this.reqTechnologies();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqTechnologies() {
    this.showSpinner = true;
    this.technologyService.getTechnologies()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrTec = result;
      }, (error) => {
        this.showSpinner = false;
        console.log(error);
      });
  }
}
