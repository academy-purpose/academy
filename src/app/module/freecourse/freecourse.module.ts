import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreecourseRoutingModule } from './freecourse-routing.module';
import { FreecourseComponent } from './freecourse.component';


@NgModule({
  declarations: [FreecourseComponent],
  imports: [
    CommonModule,
    FreecourseRoutingModule
  ]
})
export class FreecourseModule { }
