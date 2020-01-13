import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../service/user.service';

// ====================== ABOUT ME =========================
/*
* Consist of a little bit of description about the main user
* and a image
* */
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  strAbout: string;

  // -------------------------------------------------------
  constructor(private userService: UserService) { }
  // -------------------------------------------------------
  ngOnInit() {
    this.userService.getAbout()
      .subscribe((result: any) => {
      this.strAbout = result.strAbout;
    }, (error) => {
      console.log(error);
    });
  }
}
