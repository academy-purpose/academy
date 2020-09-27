import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
        //{ path : "",component : AdminLayoutComponent },

        { path : "admin", loadChildren : "../../module/admin/admin.module#AdminModule" },

        { path : "dashboard", loadChildren : "../../module/dashboard/dashboard.module#DashboardModule" },

        { path : "userprofile", loadChildren : "../../module/profile/profile.module#ProfileModule" },

        { path : "freecourse", loadChildren : "../../module/freecourse/freecourse.module#FreecourseModule" },

        { path : "paidcourse", loadChildren : "../../module/paidcourse/paidcourse.module#PaidcourseModule" },

        { path : "qaforum", loadChildren : "../../module/qaforum/qaforum.module#QaforumModule" },

        { path : "userlist", loadChildren : "../../module/userlist/userlist.module#UserlistModule" },
        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
