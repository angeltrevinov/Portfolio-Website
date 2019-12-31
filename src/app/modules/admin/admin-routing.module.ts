import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

// ===================== ADMIN ROUTING =====================
/*
* The router to control all our admin paths.
*
* MAIN - the main web page with the preview of the content
*         the admin can change.
* */
const routes: Routes = [
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
