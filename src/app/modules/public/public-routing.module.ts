import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AdmingLogInComponent} from './adming-log-in/adming-log-in.component';
import {AdminGuard} from '../../guards/admin.guard';
import {LoginGuard} from '../../guards/login.guard';

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
  {
    path: 'login',
    component: AdmingLogInComponent,
    canActivate: [LoginGuard]
  }
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
