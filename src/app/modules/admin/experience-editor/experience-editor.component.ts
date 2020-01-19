import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// =============== WORK EXPERIENCE EDITOR ==================
/*
* Web page with the form to edit or register a work experience
* */
@Component({
  selector: 'app-experience-editor',
  templateUrl: './experience-editor.component.html',
  styleUrls: ['./experience-editor.component.css']
})
export class ExperienceEditorComponent implements OnInit {

  experienceForm: FormGroup;

  // -------------------------------------------------------
  constructor() { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.createForm();
  }
  // TODO: FORM METHODS
  // -------------------------------------------------------
  createForm() {
    this.experienceForm = new FormGroup({
      strCompanyName: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      strPosition: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      strDesc: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      boolWorkingNow: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      startDate: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      endDate: new FormControl(null)
    });
  }
  // -------------------------------------------------------
  get strCompanyName() { return this.experienceForm.get('strCompanyName'); }
  // -------------------------------------------------------
  get strPosition() { return this.experienceForm.get('strPosition'); }
  // -------------------------------------------------------
  get strDesc() { return this.experienceForm.get('strDesc'); }
  // -------------------------------------------------------
  get boolWorkingNow() { return this.experienceForm.get('boolWorkingNow'); }
  // -------------------------------------------------------
  get startDate() { return this.experienceForm.get('startDate'); }
  // -------------------------------------------------------
  get endDate() { return this.experienceForm.get('endDate'); }

}
