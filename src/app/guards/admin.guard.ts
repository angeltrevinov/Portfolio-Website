import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

//  ====================== ADMIN GUARD =====================
/*
* Guard to prevent any user that is not an admin to access
* admin routes of the web page
* */
@Injectable()
export class AdminGuard implements CanActivate  {

  JWTHelper = new JwtHelperService();

  // -------------------------------------------------------
  constructor(private router: Router) {}
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
    if (!storedUser) {
      this.router.navigate(['/Adminlogin']);
      return false;
    }
    // check that the token is not expired
    const date = new Date();
    if (this.JWTHelper.getTokenExpirationDate(storedUser) <= date) {
      sessionStorage.removeItem('portfolioToken');
      this.router.navigate(['/Adminlogin']);
      return false;
    }
    return true;
  }
}
