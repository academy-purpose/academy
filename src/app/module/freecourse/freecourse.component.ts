import { Component, OnInit,SecurityContext } from '@angular/core';
import { FreecourseService } from './freecourse.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-freecourse',
  templateUrl: './freecourse.component.html',
  styleUrls: ['./freecourse.component.css']
})
export class FreecourseComponent implements OnInit {
  public response:any=[];
  public activeLink:any='python';
  public listData:any = [];

  constructor(private freeCourse:FreecourseService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.material();
    this.changeNavigation({link:'python',header:'Python'});
    this.listData=[
      {link:'python',header:'Python'},
      {link:'database',header:'Database'},
      {link:'mobile',header:'Mobile Communication'},
      {link:'angular',header:'Angular'}

    ];
  }

  public material(){
    this.freeCourse.getMaterial("").subscribe(res=>{
        this.response=res;
        this.response.python.forEach(i=>{
          //i.src=this.sanitizer.bypassSecurityTrustResourceUrl(i.src);

          // i.src=this.sanitizer.sanitize(SecurityContext.HTML, i.src);
          // console.log(i.src);
          //i.src=i.src.changingThisBreaksApplicationSecurity;

          // console.log(i.src.changingThisBreaksApplicationSecurity);
          // i.src=i.src.changingThisBreaksApplicationSecurity;
        })
        //console.log(res);
        //console.log(this.response.python[0].src.changingThisBreaksApplicationSecurity);
    });
  }

  public changeNavigation(data){
      this.activeLink = data.link;
  }

}
