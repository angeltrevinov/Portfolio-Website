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
  strAbout: string;

  // -------------------------------------------------------
  constructor(private userService: UserService) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {

    this.reqAbout();

    this.aboutForm = new FormGroup({
      // Personal description in English
      strFormAbout: new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });

  }
  // TODO: FORM METHODS
  // -------------------------------------------------------
  get strFormAbout() { return this.aboutForm.get('strFormAbout'); }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqAbout(
    // make the request for the about information
  ) {
    this.userService.getAbout()
      .subscribe((result: any) => {
        this.strAbout = result.strAbout;
      }, (error) => {
        console.log(error);
      });
  }
  // -------------------------------------------------------
  onUpdate() {
    this.userService.updateAbout(
      this.strFormAbout.value
    ).subscribe((result) => {
      this.reqAbout();
    }, (error) => {
      console.log(error);
    });
  }

}
