import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {AdminGuard} from './guards/admin.guard';

// ====================== APP MODULE =======================
/*
*  Main Module to keep our app together
* */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
