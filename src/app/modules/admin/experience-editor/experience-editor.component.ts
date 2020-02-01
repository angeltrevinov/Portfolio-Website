import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
import {ExperienceService} from '../../../service/experience.service';
import {Router} from '@angular/router';

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
  minDateForEnd: Date;
  maxDateForEnd = new Date();
  maxDateForStart = new Date();

  // -------------------------------------------------------
  constructor(
    private router: Router,
    private experienceService: ExperienceService
  ) { }
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
      boolWorkingNow: new FormControl(false, {
        validators: [
          Validators.required
        ]
      }),
      startDate: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      endDate: new FormControl(null),
      strUrlCompanySite: new FormControl(null)
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
  // -------------------------------------------------------
  get strUrlCompanySite() { return this.experienceForm.get('strUrlCompanySite'); }
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
      this.boolWorkingNow.value
    ) {
      this.endDate.setValue(null);
    }
    this.experienceService.createExperience(
      this.strCompanyName.value,
      this.strPosition.value,
      this.strDesc.value,
      this.boolWorkingNow.value,
      this.startDate.value,
      this.endDate.value,
      this.strUrlCompanySite.value
    ).subscribe(() => {
      this.router.navigate(['./admin']);
    }, (error) => {
      console.log(error);
    });
  }

}
