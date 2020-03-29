import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

//  ====================== LOGIN GUARD =====================
/*
* Guard to prevent users with valid tokens to access the login page
* */
@Injectable()
export class LoginGuard implements CanActivate  {

  JWTHelper = new JwtHelperService();

  // -------------------------------------------------------
  constructor(private router: Router) { }
  // -------------------------------------------------------
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean |
    UrlTree {

    const storedUser = sessionStorage.getItem('portfolioToken');

    // check if we have a token
    if (storedUser) {
      this.router.navigate(['/admin']);
      return false;
    }
    // check that the token is not expired
    const date = new Date();
    if (this.JWTHelper.getTokenExpirationDate(storedUser) > date) {
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
}
