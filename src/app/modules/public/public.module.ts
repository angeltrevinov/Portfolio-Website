import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PublicRoutingModule} from './public-routing.module';
import { CoverComponent } from './main/cover/cover.component';
import { ProjectCardComponent } from './main/project-section/project-card/project-card.component';
import { ExperienceCardComponent } from './main/experience-section/experience-card/experience-card.component';
import { LangFrameCardComponent } from './main/lang-frame-card/lang-frame-card.component';
import { AdmingLogInComponent } from './adming-log-in/adming-log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginGuard} from '../../guards/login.guard';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ProjectSectionComponent } from './main/project-section/project-section.component';
import {SharedModule} from '../shared/shared.module';
import { ExperienceSectionComponent } from './main/experience-section/experience-section.component';
import { EducationSectionComponent } from './main/education-section/education-section.component';
import { EducationCardComponent } from './main/education-section/education-card/education-card.component';

// ========================== PUBLIC MODULE ================
/*
* Public module to keep every public part of the app
* together
* */
@NgModule({
  declarations: [
    MainComponent,
    CoverComponent,
    ProjectCardComponent,
    ExperienceCardComponent,
    LangFrameCardComponent,
    AdmingLogInComponent,
    AboutmeComponent,
    ProjectSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    EducationCardComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [LoginGuard]
})
export class PublicModule { }
