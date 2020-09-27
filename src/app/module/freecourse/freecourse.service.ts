import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreecourseService {

  constructor(private http:HttpClient) { }

  public getMaterial(data:any){
    return this.http.get('assets/data/freematerial.json');
  }
}
