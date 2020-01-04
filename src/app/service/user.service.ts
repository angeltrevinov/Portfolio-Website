import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

// ===================== USER SERVICE ======================
/*
* Service that has the connection to the api for routes
* involving the admin user
* */

const BACKENDUSER = environment.PortfolioAPI + '/admin';

@Injectable()
export class UserService {
  // -------------------------------------------------------
  constructor(private http: HttpClient) { }
  // -------------------------------------------------------
  LogIn(
    // Verified user and give jwt
    strEmail: string,
    strPassword: string
  ) {
    return this.http.post(
      BACKENDUSER + '/login',
      { strEmail, strPassword }
      );
  }
  // -------------------------------------------------------
  getAbout(
    // Get the About information of the main
  ) {
    return this.http.get(BACKENDUSER + '/about');
  }
  // -------------------------------------------------------
  updateAbout(
    // Update the about information
    strEngAbout: string
  ) {
    return this.http.put(
      BACKENDUSER + '/about',
      { strEngAbout }
      );
  }
}
