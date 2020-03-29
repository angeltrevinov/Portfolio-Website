import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../service/project.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

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

  editProjectId: string;
  editMode = false;
  projectForm: FormGroup;

  // -------------------------------------------------------
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {

    // get params of route
    this.route.paramMap.subscribe((result: ParamMap) => {
      this.editProjectId = result.get('id');
    });

    this.createForm();

    if (this.editProjectId) {
      this.editMode = true;
      this.reqProjectDetails();
    }
  }
  // TODO: FORM METHODS
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
  // -------------------------------------------------------
  populateForm(
    // method that fills the form with the data that we have
    // receive from our backend if we are in editing mode
    editProjectInfo: any
  ) {
    this.strName.setValue(editProjectInfo.strName);
    this.strDesc.setValue(editProjectInfo.strDesc);
    this.strUrlGithub.setValue(editProjectInfo.strUrlGithub);
    this.strUrlHosting.setValue(editProjectInfo.strUrlHosting);
    this.projectForm.markAsUntouched();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqProjectDetails() {
    this.projectService.getProjectDetails(
      this.editProjectId
    ).subscribe((result: any) => {
      this.populateForm(result);
    }, (error) => {
      console.log(error);
    });
  }
  // -------------------------------------------------------
  onCreateProject() {
    this.projectService.createProject(
      this.strName.value,
      this.strDesc.value,
      this.strUrlGithub.value,
      this.strUrlHosting.value
    ).subscribe((result) => {
      this.router.navigate(['/admin']);
    }, (error) => {
      console.log(error);
    });
  }
  // -------------------------------------------------------
  onUpdateProject() {
    this.projectService.updateProject(
      this.editProjectId,
      this.strName.value,
      this.strDesc.value,
      this.strUrlGithub.value,
      this.strUrlHosting.value
    ).subscribe((result) => {
      this.router.navigate(['/admin']);
    }, error => {
      console.log(error);
    });
  }
}
