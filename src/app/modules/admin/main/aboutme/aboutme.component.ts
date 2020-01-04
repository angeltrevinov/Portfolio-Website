import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user.service';

// ======================= ABOUT ME ========================
/*
* This section holds the information about the user and it
* helps updating that information
* */
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutForm: FormGroup;

  // -------------------------------------------------------
  constructor(private userService: UserService) { }
  /* Angular methods */
  // -------------------------------------------------------
  ngOnInit() {

    this.reqAbout();

    this.aboutForm = new FormGroup({
      // Personal description in English
      strEngAbout: new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });

  }
  /* Form methods */
  // -------------------------------------------------------
  get strEngAbout() { return this.aboutForm.get('strEngAbout'); }
  /* Service methods */
  // -------------------------------------------------------
  reqAbout(
    // make the request for the about information
  ) {
    this.userService.getAbout()
      .subscribe((result: any) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      });
  }
  /* HTML methods */
  // -------------------------------------------------------
  onUpdate() {
    console.log('here');
  }

}
