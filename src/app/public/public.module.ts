import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PublicRoutingModule} from './public-routing.module';
import { CoverComponent } from './main/cover/cover.component';
import { ProjectCardComponent } from './main/project-card/project-card.component';
import { ExperienceCardComponent } from './main/experience-card/experience-card.component';
import { LangFrameCardComponent } from './main/lang-frame-card/lang-frame-card.component';
import { AdmingLogInComponent } from './adming-log-in/adming-log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../service/user.service';

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
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ],
})
export class PublicModule { }
