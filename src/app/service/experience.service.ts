import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

// =================== EXPERIENCE SERVICE ==================
/*
* Service that has the connection to the api for routes
* involving the work experience
* */

const BACKENDEXPERIENCE = environment.PortfolioAPI + '/experience';

@Injectable()
export class ExperienceService {
  // -------------------------------------------------------
  constructor(private http: HttpClient) { }
  // -------------------------------------------------------
  getExperienceAdmin(
    // method to get the work experience for the admin
    // preview
  ) {
    return this.http.get( BACKENDEXPERIENCE + '/admin');
  }
  // -------------------------------------------------------
  createExperience(
    // http method to request to register a work experience
    strCompanyName: string,
    strPosition: string,
    strDesc: string,
    boolWorkingNow: boolean,
    startDate: Date,
    endDate: Date,
  ) {
    return this.http.post(
      BACKENDEXPERIENCE + '/',
      {
        strCompanyName,
        strPosition,
        strDesc,
        boolWorkingNow,
        startDate,
        endDate
      }
    );
  }
}
