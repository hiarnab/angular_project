import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentlistComponent } from './appoinmentlist/appoinmentlist.component';
import { AppoinmentviewComponent } from './appoinmentview/appoinmentview.component';
import { AppoinmenteditComponent } from './appoinmentedit/appoinmentedit.component';
import { AppoinmentupdateComponent } from './appoinmentupdate/appoinmentupdate.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    FeatureComponent,
    TeamComponent,
    AppointmentComponent,
    TestimonialComponent,
    NotFoundComponent,
    AppoinmentlistComponent,
    AppoinmentviewComponent,
    AppoinmenteditComponent,
    AppoinmentupdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
