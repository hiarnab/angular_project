import { Component } from '@angular/core';
import { AppoinmentService } from '../service/appoinment.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
   
  AppointmentForm:FormGroup = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    description:new FormControl(''),
    doctor:new FormControl(''),
  });
  constructor(private appointment:AppoinmentService){}
 
  AppointmentAdd()
  {
    return this.appointment.AddAppoinment(this.AppointmentForm.value).subscribe((res)=>{
      if(res.is_success)
      {
        alert("Appointment Done Successfully");
      }
    })
  }
}
