import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ===================== APP ROUTING =======================
/*
* The main router controller of the application, here we are
* going to lazy load any modules that we need.
*
* PUBLIC - are for parts of the web page everyone can see
* */

const routes: Routes = [
  // Lazy loading for public paths
  { path: '', loadChildren: () =>
      import('./public/public.module').then(m => m.PublicModule) },

  // Catch any incorrect path
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
