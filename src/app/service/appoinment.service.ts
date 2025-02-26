import { Injectable } from '@angular/core';
import BaseDataServiceService from './base-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService extends BaseDataServiceService{

  constructor(private http:HttpClient) {
    super();
   }

   AddAppoinment(model:any)
   {
    return this.PostRequest(this.http,"appoinment/store",model);
   } 

   ListAppoinment()
   {
    return this.GetRequest(this.http,"appoinment/list");
   }

   DetailsAppoinment(id:any)
   {
    return this.GetRequest(this.http,"appoinment/view/"+id);
   }

   EditAppoinment(id:any)
   {
    return this.GetRequest(this.http, "appoinment/edit/"+id);
   }

   UpdateAppoinment(model:any)
   {
    return this.PostRequest(this.http,"appoinment/update",model);
   }
}
