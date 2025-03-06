import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularproject';
  showHeader:number = 1;
  showFooter:number = 1;
  currentUrl:string = "";
  // currentUrl2:string = "";
   constructor(private router:Router){}
   ngOnInit(): void {
  
    this.router.events.subscribe(value => {
      console.log('current route: ', this.router.url.toString());
      if(this.router.url.toString() == "/login")
        {
          this.showHeader = 0;
          this.showFooter = 0;
          console.log(this.showHeader);
          console.log(this.showFooter);
        }else{
          this.showHeader = 1;
          this.showFooter = 1;
        }
  });

   }

}
