import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

// =================== TECHNOLOGY SERVICE ==================
/*
* Service that has the connection to the api for routes
* involving the languages and frameworks
* */

const BACKENDTECHNOLOGY = environment.PortfolioAPI + '/tec';

@Injectable()
export class TechnologyService {
  // -------------------------------------------------------
  constructor(private http: HttpClient) { }
  // -------------------------------------------------------
  getTechnologiesAdmin() {
    return this.http.get( BACKENDTECHNOLOGY + '/admin');
  }
  // -------------------------------------------------------
  createTechnology(
    strName: string,
    intLevel: number,
    strTime: string
  ) {
    return this.http.post(
      BACKENDTECHNOLOGY + '/',
      {
        strName,
        intLevel,
        strTime
      }
    );
  }
}
