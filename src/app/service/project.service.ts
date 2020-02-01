import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

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
  getProjects() {
    return this.http.get( BACKENDPROJECT + '/');
  }
  // -------------------------------------------------------
  getProjectsAdmin() {
    return this.http.get(BACKENDPROJECT + '/admin');
  }
  // -------------------------------------------------------
  getProjectDetails(
    strIdProject: string
  ) {
    return this.http.get(
      BACKENDPROJECT + '/' + strIdProject
    );
  }
  // -------------------------------------------------------
  createProject(
    strName: string,
    strDesc: string,
    strUrlGithub: string,
    strUrlHosting: string,
  ) {
    return this.http.post(
      BACKENDPROJECT + '/',
      { strName, strDesc, strUrlGithub, strUrlHosting }
    );
  }
  // -------------------------------------------------------
  updateProject(
    strIdProject: string,
    strName: string,
    strDesc: string,
    strUrlGithub: string,
    strUrlHosting: string
  ) {
    return this.http.put(
      BACKENDPROJECT + '/' + strIdProject,
      {
        strName,
        strDesc,
        strUrlGithub,
        strUrlHosting
      }
    );
  }
  // -------------------------------------------------------
  deleteProject(
    strIdProject: string
  ) {
    return this.http.delete(
      BACKENDPROJECT + '/' + strIdProject
    );
  }
}
