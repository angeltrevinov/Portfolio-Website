import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProjectsTableComponent } from './main/projects-table/projects-table.component';
import {SharedModule} from '../shared/shared.module';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ExperienceEditorComponent } from './experience-editor/experience-editor.component';

// ======================= ADMIN MODULE ====================
/*
* Admin module to keep every admin part of the app together
*
* The admin can change the content that is displayed on the
* web page, like project information and so on.
* */
@NgModule({
  declarations: [
    MainComponent,
    AboutmeComponent,
    ProjectsTableComponent,
    ProjectEditorComponent,
    ExperienceEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
