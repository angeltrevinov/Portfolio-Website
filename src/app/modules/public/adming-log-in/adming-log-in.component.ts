import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

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
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  // TODO: ANGULAR METHODS
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
  // TODO: FORM METHODS
  // -------------------------------------------------------
  get strEmail() { return this.loginForm.get('strEmail'); }
  // -------------------------------------------------------
  get strPassword() { return this.loginForm.get('strPassword'); }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  onLogin() {
    this.userService.LogIn(
      this.strEmail.value,
      this.strPassword.value
    ).subscribe((result: any) => {
      sessionStorage.setItem('portfolioToken', result.token);
      this.router.navigate(['/admin']);
    }, (error) => {
      console.log(error);
    });
  }
}
