import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from './guards/admin.guard';

// ===================== APP ROUTING =======================
/*
* The main router controller of the application, here we are
* going to lazy load any modules that we need.
*
* PUBLIC - are for parts of the web page everyone can see
* ADMIN - are for parts of the web page the admin can see
* */

const routes: Routes = [
  // Lazy loading for public paths
  { path: '', loadChildren: () =>
      import('./modules/public/public.module').then(m => m.PublicModule) },
  // Lazy loading admin paths
  { path: 'admin', loadChildren: () =>
      import('./modules/admin/admin.module').then(m => m.AdminModule),
      canActivate: [AdminGuard]
  },
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
