import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

// ==================== EDUCATION SERVICE ==================
/*
* Service that has the connection to the api for routes
* involving the work experience
* */

const BACKENDEDUCATION = environment.PortfolioAPI + '/education';

@Injectable()
export class EducationService {
  // -------------------------------------------------------
  constructor(private http: HttpClient) { }
  // -------------------------------------------------------
  createEducation(
    strSchoolName: string,
    strTitle: string,
    boolStudyingNow: boolean,
    startDate: Date,
    endDate: Date,
    strUrlEducationSite: string
  ) {
    return this.http.post(
      BACKENDEDUCATION + '/',
      {
        strSchoolName,
        strTitle,
        boolStudyingNow,
        startDate,
        endDate,
        strUrlEducationSite
      }
    );
  }
}
