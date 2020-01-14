import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ProjectService} from '../../../service/project.service';

// ==================== PROJECT EDITOR =====================
/*
* Web page with the form to edit or create a project.
* */
@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {

  projectForm: FormGroup;

  // -------------------------------------------------------
  constructor(private projectService: ProjectService) { }
  /* ANGULAR METHODS */
  // -------------------------------------------------------
  ngOnInit() {
    this.createForm();
  }
  /* FORM METHODS */
  // -------------------------------------------------------
  createForm() {
    this.projectForm = new FormGroup({
      strName: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      strDesc: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      strUrlGithub: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      strUrlHosting: new FormControl(null)
    });
  }
  // -------------------------------------------------------
  get strName() { return this.projectForm.get('strName'); }
  // -------------------------------------------------------
  get strDesc() { return this.projectForm.get('strDesc'); }
  // -------------------------------------------------------
  get strUrlGithub() { return this.projectForm.get('strUrlGithub'); }
  // -------------------------------------------------------
  get strUrlHosting() { return this.projectForm.get('strUrlHosting'); }
  /* HTTP METHODS */
  // -------------------------------------------------------
  onCreateProject() {
    this.projectService.createProject(
      this.strName.value,
      this.strDesc.value,
      this.strUrlGithub.value,
      this.strUrlHosting.value
    ).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
