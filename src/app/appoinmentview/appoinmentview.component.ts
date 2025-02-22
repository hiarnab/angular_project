import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../service/appoinment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appoinmentview',
  templateUrl: './appoinmentview.component.html',
  styleUrls: ['./appoinmentview.component.css']
})
export class AppoinmentviewComponent implements OnInit {
   constructor(private appoinment:AppoinmentService, private router:ActivatedRoute){
   }
   appoinmentid:any;
  appoinmentdetails:any;
  ngOnInit(): void {
    this.appoinmentid = this.router.snapshot.paramMap.get('id');
    console.log(this.router.snapshot.paramMap.get('id'));
    this.AppoinmentDetails();

  }
  AppoinmentDetails()
  {
    return this.appoinment.DetailsAppoinment(this.appoinmentid).subscribe((res)=>{
      if (res.is_success) {
        this.appoinmentdetails = res.data;
      }
    })
  }
   
}
