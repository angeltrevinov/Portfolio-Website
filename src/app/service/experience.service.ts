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
  getExperience() {
    return this.http.get(BACKENDEXPERIENCE + '/');
  }
  // -------------------------------------------------------
  getExperienceAdmin() {
    return this.http.get( BACKENDEXPERIENCE + '/admin');
  }
  // -------------------------------------------------------
  getExperienceDetails(
    strIdExperience: string
  ) {
    return this.http.get(
      BACKENDEXPERIENCE + '/' + strIdExperience
    );
  }
  // -------------------------------------------------------
  createExperience(
    strCompanyName: string,
    strPosition: string,
    strDesc: string,
    boolWorkingNow: boolean,
    startDate: Date,
    endDate: Date,
    strUrlCompanySite: string
  ) {
    return this.http.post(
      BACKENDEXPERIENCE + '/',
      {
        strCompanyName,
        strPosition,
        strDesc,
        boolWorkingNow,
        startDate,
        endDate,
        strUrlCompanySite
      }
    );
  }
  // -------------------------------------------------------
  updateExperience(
    strIdExperience: string,
    strCompanyName: string,
    strPosition: string,
    strDesc: string,
    boolWorkingNow: boolean,
    startDate: Date,
    endDate: Date,
    strUrlCompanySite: string
  ) {
    return this.http.put(
      BACKENDEXPERIENCE + '/' + strIdExperience,
      {
        strCompanyName,
        strPosition,
        strDesc,
        boolWorkingNow,
        startDate,
        endDate,
        strUrlCompanySite
      }
    );
  }
  // -------------------------------------------------------
  deleteExperience(
    strIdExperience: string
  ) {
    return this.http.delete(
      BACKENDEXPERIENCE + '/' + strIdExperience
    );
  }
}
