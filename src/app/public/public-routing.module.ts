import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AdmingLogInComponent} from './adming-log-in/adming-log-in.component';

// ======================= PUBLIC ROUTING ==================
/*
*  The router to control all our public paths.
*
*  MAIN - the main web page with the most important
*         information.
*  AdminLogIn - the page to grant admin access for the app
* */
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Adminlogin', component: AdmingLogInComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
