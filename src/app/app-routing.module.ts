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
    path:'testimonial',
    component:TestimonialComponent
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
