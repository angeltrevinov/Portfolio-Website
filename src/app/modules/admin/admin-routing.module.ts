import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProjectEditorComponent} from './project-editor/project-editor.component';

// ===================== ADMIN ROUTING =====================
/*
* The router to control all our admin paths.
*
* MAIN - the main web page with the preview of the content
*         the admin can change.
* PROJECT - the web page were you can edit or create a
*           project.
* */
const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'project', component: ProjectEditorComponent },
  { path: 'project/:id', component: ProjectEditorComponent}
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
