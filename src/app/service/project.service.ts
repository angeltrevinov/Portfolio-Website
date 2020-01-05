import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

// ======================== PROJECT SERVICE ================
/*
* Service that has te connection to the api for routes
* involving the projects
* */

const BACKENDPROJECT = environment.PortfolioAPI + '/project';

@Injectable()
export class ProjectService {
  // -------------------------------------------------------
  constructor(private http: HttpClient) { }
  // -------------------------------------------------------
  getProjects(
    // method to get the projects and their details
  ) {
    return this.http.get( BACKENDPROJECT + '/');
  }
  // -------------------------------------------------------
  getProjectsAdmin(
    // method to get the projects for the admin preview
  ) {
    return this.http.get(BACKENDPROJECT + '/admin');
  }
}
