import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError as obserableThrowError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export default class BaseDataServiceService {
  private ApiUrl: string = "http://127.0.0.1:8000/api/";
  private headers?: HttpHeaders;
  protected PostRequest(http: HttpClient, url: string, model: any) {
    return http.post<BaseResponse>(this.ApiUrl+url,model);
  }
  protected GetRequest(http: HttpClient, url: string) {
    return http.get<BaseResponse>(this.ApiUrl+url, { headers: this.headers });
  }
  protected PutRequest(http:HttpClient,url:string,model:any){
    return http.put<BaseResponse>(this.ApiUrl+url,model);
  }
  protected DeleteRequest(http:HttpClient,url:string,model:any){
    return http.delete<BaseResponse>(this.ApiUrl+url, { body: model });
  }
  HandleError(error: HttpErrorResponse) {
    return obserableThrowError(error.message || "Server error");
}
  constructor() { }
}
export interface BaseResponse {
  is_success: boolean,
  data: Object,
  message: string,
  errors: Object
}