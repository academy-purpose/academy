import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreecourseComponent } from './freecourse.component';


const routes: Routes = [
  { path: "", component: FreecourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreecourseRoutingModule { }
