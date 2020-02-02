import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-education-editor',
  templateUrl: './education-editor.component.html',
  styleUrls: ['./education-editor.component.css']
})
export class EducationEditorComponent implements OnInit {

  educationForm: FormGroup;
  minDateForEnd: Date;
  maxDateForEnd = new Date();
  maxDateForStart = new Date();

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
    this.educationForm = new FormGroup({
      strSchoolName: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      strTitle: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      boolStudyingNow: new FormControl(false, {
        validators: [
          Validators.required
        ]
      }),
      startDate: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      endDate: new FormControl(null),
      strUrlEducationSite: new FormControl(null)
    });
  }
  // -------------------------------------------------------
  get strSchoolName() { return this.educationForm.get('strSchoolName'); }
  // -------------------------------------------------------
  get strTitle() { return this.educationForm.get('strTitle'); }
  // -------------------------------------------------------
  get boolStudyingNow() { return this.educationForm.get('boolStudyingNow'); }
  // -------------------------------------------------------
  get startDate() { return this.educationForm.get('startDate'); }
  // -------------------------------------------------------
  get endDate() { return this.educationForm.get('endDate'); }
  // -------------------------------------------------------
  get strUrlEducationSite() { return this.educationForm.get('strUrlEducationSite'); }
  // -------------------------------------------------------
  startDateChange(event: MatDatepickerInputEvent<Date>) {
    this.minDateForEnd = event.value;
  }
  // -------------------------------------------------------
  endDateChange(event: MatDatepickerInputEvent<Date>) {
    this.maxDateForStart = event.value;
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  onCreate() {
    if (
      // convert end date to null if still working there
      this.boolStudyingNow.value
    ) {
      this.endDate.setValue(null);
    }

  }
}
