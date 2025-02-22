import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../service/appoinment.service';

@Component({
  selector: 'app-appoinmentlist',
  templateUrl: './appoinmentlist.component.html',
  styleUrls: ['./appoinmentlist.component.css']
})
export class AppoinmentlistComponent implements OnInit {
   
  constructor(private appointment:AppoinmentService){}
  ngOnInit(): void {
     this.AppointmentList();
   }
   appointmentlist:any;
   AppointmentList()
   {
    return this.appointment.ListAppoinment().subscribe((res)=>{
      if(res.is_success)
      {
        this.appointmentlist = res.data;
        // console.log(this.appointmentlist);
      }
    })
   }

}
