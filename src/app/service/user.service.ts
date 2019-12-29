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
    strEmail: string,
    strPassword: string
  ) {
    this.http.post(
      'login',
      { strEmail, strPassword }
      );
  }
}
