import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaidcourseComponent } from './paidcourse.component';


const routes: Routes = [
  { path : "", component: PaidcourseComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaidcourseRoutingModule { }
