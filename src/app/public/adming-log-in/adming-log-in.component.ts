import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';

// ====================== ADMIN PAGE =======================
/**
 * Page to ask for credentials for admin access
 */
@Component({
  selector: 'app-adming-log-in',
  templateUrl: './adming-log-in.component.html',
  styleUrls: ['./adming-log-in.component.css']
})
export class AdmingLogInComponent implements OnInit {

  loginForm: FormGroup;

  // -------------------------------------------------------
  constructor(private userService: UserService) { }
  // -------------------------------------------------------
  ngOnInit() {

    this.loginForm = new FormGroup({
      strEmail: new FormControl(null, {
        validators: [
          Validators.email,
          Validators.required
        ]
      }),
      strPassword: new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });

  }
  // -------------------------------------------------------
  onLogin() {
    console.log('here');
  }
}
