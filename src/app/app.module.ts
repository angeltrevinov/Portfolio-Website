import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {AdminGuard} from './guards/admin.guard';
import {TokenInterceptor} from './service/TokenInterceptor';
import {ProjectService} from './service/project.service';
import {MatNativeDateModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ExperienceService} from './service/experience.service';
import {EducationService} from './service/education.service';

// ====================== APP MODULE =======================
/*
*  Main Module to keep our app together
* */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatNativeDateModule
  ],
  providers: [
    UserService,
    ProjectService,
    ExperienceService,
    EducationService,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
