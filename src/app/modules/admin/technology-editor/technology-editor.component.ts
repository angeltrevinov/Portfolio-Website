import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TechnologyService} from '../../../service/technology.service';
import {Router} from '@angular/router';
import {StarRatingComponent} from 'ng-starrating';

// ==================== TECHNOLOGY EDITOR =====================
/*
* Web page with the form to edit or register new technologies.
* */
@Component({
  selector: 'app-technology-editor',
  templateUrl: './technology-editor.component.html',
  styleUrls: ['./technology-editor.component.css']
})
export class TechnologyEditorComponent implements OnInit {

  technologyForm: FormGroup;

  // -------------------------------------------------------
  constructor(
    private router: Router,
    private technologyService: TechnologyService
  ) { }

  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    this.createForm();
  }
  // TODO: FORM METHODS
  // -------------------------------------------------------
  createForm() {
    this.technologyForm = new FormGroup({
      strName: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      intLevel: new FormControl(0, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(4)
        ]
      }),
      strTime: new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });
  }
  // -------------------------------------------------------
  get strName() { return this.technologyForm.get('strName'); }
  // -------------------------------------------------------
  get intLevel() { return this.technologyForm.get('intLevel'); }
  // -------------------------------------------------------
  get strTime() { return this.technologyForm.get('strTime'); }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  onCreateProject() {
    this.technologyService.createTechnology(
      this.strName.value,
      this.intLevel.value,
      this.strTime.value
    ).subscribe((result) => {
      this.router.navigate(['/admin']);
    }, (error) => {
      console.log(error);
    });
  }
  // -------------------------------------------------------
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
