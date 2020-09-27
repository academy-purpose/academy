import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaforumRoutingModule } from './qaforum-routing.module';
import { QaforumComponent } from './qaforum.component';


@NgModule({
  declarations: [QaforumComponent],
  imports: [
    CommonModule,
    QaforumRoutingModule
  ]
})
export class QaforumModule { }
