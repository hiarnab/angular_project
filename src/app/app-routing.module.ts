import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppoinmentlistComponent } from './appoinmentlist/appoinmentlist.component';
import { AppoinmentviewComponent } from './appoinmentview/appoinmentview.component';
import { AppoinmenteditComponent } from './appoinmentedit/appoinmentedit.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },  
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'feature',
    component:FeatureComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:"appoinmentlist",
    component:AppoinmentlistComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'appoinment/details/:id',
    component:AppoinmentviewComponent
  },
  {
    path:'appoinment/edit/:id',
    component:AppoinmenteditComponent
  },
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  // This is for wildcard route
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
