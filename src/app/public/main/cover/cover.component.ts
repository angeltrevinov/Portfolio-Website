import { Component, OnInit } from '@angular/core';

// ====================== COVER ============================
/*
* Consist of displaying the name and cover that appears
*   first in the web page, taken from the tutorial below
*
*   NOTE: If want to change the design, look at the tutorial
*   and read the comments for more info about the svg
*
* https://youtu.be/vJNVramny9k
* */
@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  // -------------------------------------------------------
  constructor() { }
  // --------------------------------------------------------
  ngOnInit() {}
}
