import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
import {EducationService} from '../../../service/education.service';

@Component({
  selector: 'app-education-editor',
  templateUrl: './education-editor.component.html',
  styleUrls: ['./education-editor.component.css']
})
export class EducationEditorComponent implements OnInit {

  editEducation: string;
  editMode = false;
  educationForm: FormGroup;
  minDateForEnd: Date;
  maxDateForEnd = new Date();
  maxDateForStart = new Date();

  // -------------------------------------------------------
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private educationService: EducationService
  ) { }
  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {

    // obtain the params of route
    this.route.paramMap.subscribe((result: ParamMap) => {
      this.editEducation = result.get('id');
    });

    this.createForm();

    if (this.editEducation) {
      this.editMode = true;
      this.reqEducationDetails();
    }
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
  // -------------------------------------------------------
  populateForm(
    editEducationInfo: any
  ) {
    this.strSchoolName.setValue(editEducationInfo.strSchoolName);
    this.strTitle.setValue(editEducationInfo.strTitle);
    this.boolStudyingNow.setValue(editEducationInfo.boolStudyingNow);
    this.startDate.setValue(editEducationInfo.startDate);
    this.endDate.setValue(editEducationInfo.endDate);
    this.strUrlEducationSite.setValue(editEducationInfo.strUrlEducationSite);
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqEducationDetails() {
    this.educationService.getEducationDetails(
      this.editEducation
    ).subscribe((result: any) => {
      this.populateForm(result);
    }, (error) => {
      console.log(error);
    });
  }
  // -------------------------------------------------------
  onCreate() {
    if (
      // convert end date to null if still working there
      this.boolStudyingNow.value
    ) {
      this.endDate.setValue(null);
    }
    this.educationService.createEducation(
      this.strSchoolName.value,
      this.strTitle.value,
      this.boolStudyingNow.value,
      this.startDate.value,
      this.endDate.value,
      this.strUrlEducationSite.value
    ).subscribe(() => {
      this.router.navigate(['./admin']);
    }, (error) => {
      console.log(error);
    });
  }
  // -------------------------------------------------------
  onUpdateEducation() {
    if (
      // convert end date to null if still working there
      this.boolStudyingNow.value
    ) {
      this.endDate.setValue(null);
    }
    this.educationService.updateEducation(
      this.editEducation,
      this.strSchoolName.value,
      this.strTitle.value,
      this.boolStudyingNow.value,
      this.startDate.value,
      this.endDate.value,
      this.strUrlEducationSite.value
    ).subscribe(() => {
      this.router.navigate(['./admin']);
    }, (error) => {
      console.log(error);
    });
  }
}
