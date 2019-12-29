import {Component, OnInit} from '@angular/core';

// ======================= MAIN PAGE =======================
/*
* This holds the main page with the information about myself,
* My projects, experience, languages i work with and so on.
* This is the first page the normal user would see
* */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // -------------------------------------------------------
  constructor() { }
  // -------------------------------------------------------
  ngOnInit() {}
}
