import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AdminLayoutService } from '../admin-layout.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit {
  public menuItems: any[];
  public response:any;

  constructor(private adminLayoutService:AdminLayoutService) { }

//   ROUTES= [
//     { path: '/admin',         title: 'Admin(Rahul)',      display : true,  displaysequence :1,      icon:'fa fa-lock', class: '' },
//     { path: '/dashboard',     title: 'Dashboard',         display : true,  displaysequence :2,     icon:'fa fa-university',       class: '' },
//     { path: '/userprofile',   title: 'User Profile',      display : true,  displaysequence :3,     icon:'fa fa-user',    class: '' },
//     { path: '/freecourse',    title: 'Free Course',       display : true,  displaysequence :4,     icon:'fa fa-leanpub',      class: '' },
//     { path: '/paidcourse',    title: 'Paid Course',       display : true,  displaysequence :5,     icon:'fa fa-inr',    class: '' },
//     { path: '/qaforum',       title: 'Q&A Forum',         display : true,  displaysequence :6,      icon:'fa fa-question',  class: '' },
//     { path: '/userlist',      title: 'User List',         display : true,  displaysequence :7,     icon:'fa fa-users',    class: '' },
    
// ];

    ngOnInit() {
        this.adminLayoutService.getSideBar().subscribe(res=>{
          console.log(res);
          this.response=res;
          this.menuItems = this.response.menu.sort((a,b)=> a.displaysequence - b.displaysequence );
        });
    }

}
