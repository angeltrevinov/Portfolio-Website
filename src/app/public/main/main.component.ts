import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('Logo', {static: true}) Logo: ElementRef;

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < this.Logo.nativeElement.childNodes.length; i++) {
      console.log('Letter' + i + ' is ' + this.Logo.nativeElement.childNodes[i].getTotalLength());
    }
  }

}
