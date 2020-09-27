import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminModule } from 'src/app/module/admin/admin.module';


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminModule,
    AdminLayoutRoutingModule
  ],
  exports : [AdminLayoutComponent]
})
export class AdminLayoutModule { }
