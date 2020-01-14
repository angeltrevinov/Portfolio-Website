import {Component, Input, OnInit} from '@angular/core';

// ======================= PROJECT CARD ====================
/*
* Component to hold the template for the main information of
* projects.
* */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: any;

  // -------------------------------------------------------
  constructor() { }
  // -------------------------------------------------------
  ngOnInit() { }
}
