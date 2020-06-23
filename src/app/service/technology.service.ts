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
  getTechnologies() {
    return this.http.get(BACKENDTECHNOLOGY + '/');
  }
  // -------------------------------------------------------
  getTechnologiesAdmin() {
    return this.http.get( BACKENDTECHNOLOGY + '/admin');
  }
  // -------------------------------------------------------
  getTechnologyDetails(strId: string) {
    return this.http.get(
      BACKENDTECHNOLOGY + '/' + strId
    );
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
  // -------------------------------------------------------
  updateTechnology(
    strId: string,
    strName: string,
    intLevel: number,
    strTime: string
  ) {
    return this.http.put(
      BACKENDTECHNOLOGY + '/' + strId,
      {
        strName,
        intLevel,
        strTime
      }
    );
  }
  // -------------------------------------------------------
  deleteTechnology(strId: string) {
    return this.http.delete(
      BACKENDTECHNOLOGY + '/' + strId
    );
  }
}
