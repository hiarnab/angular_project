import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // showHeader: number = 0;
   token:string = "session";
    authadmin:any;

  LoginForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor (protected router:Router, private login:LoginService) {}

  LoginSubmit ()
  {
    return this.login.login(this.LoginForm.value).subscribe((res)=> {
      if (res.is_success){
        localStorage.setItem(this.token,JSON.stringify(res.data))
          this.authadmin = localStorage.getItem(this.token);
          console.log(this.authadmin);
          this.router.navigate(["dashboard"]);
      }
    })
  }
  
}
