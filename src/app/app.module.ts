import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { DataService } from './service/data.service';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Weather1Component } from './weather1/weather1.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    ViewusersComponent,
    SampleComponent,
    TestComponent,
    TopbarComponent,
    Weather1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
