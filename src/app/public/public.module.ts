import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PublicRoutingModule} from './public-routing.module';
import { CoverComponent } from './main/cover/cover.component';
import { ProjectCardComponent } from './main/project-card/project-card.component';
import { ExperienceCardComponent } from './main/experience-card/experience-card.component';
import { LangFrameCardComponent } from './main/lang-frame-card/lang-frame-card.component';

@NgModule({
  declarations: [
    MainComponent,
    CoverComponent,
    ProjectCardComponent,
    ExperienceCardComponent,
    LangFrameCardComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
