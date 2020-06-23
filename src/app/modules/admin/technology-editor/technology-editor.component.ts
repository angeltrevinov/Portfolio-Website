import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TechnologyService} from '../../../service/technology.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RatingChangeEvent} from 'angular-star-rating';

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

  editTecId: string;
  editMode = false;
  technologyForm: FormGroup;

  // -------------------------------------------------------
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private technologyService: TechnologyService
  ) { }

  // TODO: ANGULAR METHODS
  // -------------------------------------------------------
  ngOnInit() {
    // get params of route
    this.route.paramMap.subscribe((result: ParamMap) => {
      this.editTecId = result.get('id');
    });

    this.createForm();

    if (this.editTecId){
      this.editMode = true;
      this.reqTecDetails();
    }
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
  onRatingChange($event: RatingChangeEvent) {
    this.intLevel.setValue($event.rating);
    this.technologyForm.markAsTouched();
  }
  // -------------------------------------------------------
  get strName() { return this.technologyForm.get('strName'); }
  // -------------------------------------------------------
  get intLevel() { return this.technologyForm.get('intLevel'); }
  // -------------------------------------------------------
  get strTime() { return this.technologyForm.get('strTime'); }
  // -------------------------------------------------------
  populateForm(
    editTecInfo: any
  ) {
    this.strName.setValue(editTecInfo.strName);
    this.intLevel.setValue(editTecInfo.intLevel);
    this.strTime.setValue(editTecInfo.strTime);
    this.technologyForm.markAsUntouched();
  }
  // TODO: HTTP METHODS
  // -------------------------------------------------------
  reqTecDetails() {
    this.technologyService.getTechnologyDetails(
      this.editTecId
    ).subscribe( (result: any) => {
      this.populateForm(result);
    }, (error) => {
      console.log(error);
    });
  }
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
  onUpdateTec() {
    this.technologyService.updateTechnology(
      this.editTecId,
      this.strName.value,
      this.intLevel.value,
      this.strTime.value
    ).subscribe(() => {
      this.router.navigate(['/admin']);
    }, (error) => {
      console.log(error);
    });
  }
}
