import {Component, Input, OnInit} from '@angular/core';

// ======================= TEC CARD ====================
/*
* Component to hold the template for the main information of
* technologies.
* */
@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {

  @Input() tec: any;
  // -------------------------------------------------------
  constructor() { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit(): void {}
}
