import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaforumComponent } from './qaforum.component';


const routes: Routes = [
  { path: "", component: QaforumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QaforumRoutingModule { }
