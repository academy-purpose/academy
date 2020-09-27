import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  constructor(private http: HttpClient) { }

  public getSideBar():Observable<any>{
    return this.http.get('assets/data/sidebar.json');
  }
}
