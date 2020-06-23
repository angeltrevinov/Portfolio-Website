import { Component, OnInit } from '@angular/core';
import {TechnologyService} from '../../../../service/technology.service';

// ================ TECHNOLOGIES TABLE =====================
/*
* Component that holds a table with our technologies we have
* work with
* */
@Component({
  selector: 'app-tec-table',
  templateUrl: './tec-table.component.html',
  styleUrls: ['./tec-table.component.css']
})
export class TecTableComponent implements OnInit {

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
    this.reqTechnology();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqTechnology() {
    this.showSpinner = true;
    this.technologyService.getTechnologiesAdmin()
      .subscribe((result: any) => {
        this.showSpinner = false;
        this.arrTec = result;
      }, error => {
        this.showSpinner = false;
        console.log(error);
      });
  }
  // -------------------------------------------------------
  onDelete(strId: string) {
    this.technologyService.deleteTechnology(strId)
      .subscribe(() => {
        this.reqTechnology();
      }, (error) => {
        console.log(error);
      });
  }
}
