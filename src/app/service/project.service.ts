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
  // -------------------------------------------------------
  createProject(
    // http method to request to create a new project
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
  getProjectDetails(
    // http method to request the details of a project
    strIdProject: string
  ) {
    return this.http.get(
      BACKENDPROJECT + '/' + strIdProject
    );
  }
  // -------------------------------------------------------
  updateProject(
    // http method to request an update of our project
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
    // http method to request the deletion of a project
    strIdProject: string
  ) {
    return this.http.delete(
      BACKENDPROJECT + '/' + strIdProject
    );
  }
}
