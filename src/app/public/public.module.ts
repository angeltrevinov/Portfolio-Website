import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PublicRoutingModule} from './public-routing.module';
import { CoverComponent } from './main/cover/cover.component';

@NgModule({
  declarations: [
    MainComponent,
    CoverComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
