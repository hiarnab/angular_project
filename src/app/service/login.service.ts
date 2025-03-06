import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BaseDataServiceService from './base-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseDataServiceService{

  constructor(private http:HttpClient ) { 
    super();
  }

  login(model:any) {
    return this.PostRequest(this.http,"login",model);
  }
}
