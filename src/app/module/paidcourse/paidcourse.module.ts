import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaidcourseRoutingModule } from './paidcourse-routing.module';
import { PaidcourseComponent } from './paidcourse.component';


@NgModule({
  declarations: [PaidcourseComponent],
  imports: [
    CommonModule,
    PaidcourseRoutingModule
  ]
})
export class PaidcourseModule { }
