import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppoinmentService } from '../service/appoinment.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appoinmentedit',
  templateUrl: './appoinmentedit.component.html',
  styleUrls: ['./appoinmentedit.component.css']
})
export class AppoinmenteditComponent implements OnInit{
  AppoinmentUpdate:FormGroup = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    doctor:new FormControl(''),
    description:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    created_at:new FormControl(''),
  });

  constructor(private appoinment:AppoinmentService, private router:ActivatedRoute){
  }
  appoinmenteditid:any;
  appoinmentedit:any;
  ngOnInit(): void {
      this.appoinmenteditid = this.router.snapshot.paramMap.get('id');
      console.log(this.router.snapshot.paramMap.get('id'));
      this.AppoinmentEdit();
    throw new Error('Method not implemented.');
  }

  AppoinmentEdit()
  {
    return this.appoinment.EditAppoinment(this.appoinmenteditid).subscribe((res)=>{
      if(res.is_success){
        this.appoinmentedit = res.data;
      }
    })
  }

  Appointmentupdate()
  {
    console.log(this.AppoinmentUpdate.value);
    return this.appoinment.UpdateAppoinment(this.AppoinmentUpdate.value).subscribe((res)=>{
      if (res.is_success){
        alert('Appoinment Updated successfully');
      }
    })
  }
}
