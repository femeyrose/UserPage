import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import {AuthenticationGuard} from './authentication.guard'; 
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Weather1Component } from './weather1/weather1.component';
import { Weather2Component } from './weather2/weather2.component';
import { Weather4Component } from './weather4/weather4.component';
import { Weather3Component } from './weather3/weather3.component';


const routes: Routes = [
  {
    path:'',redirectTo:"/",pathMatch:'full'
  
  },
  {
    path:'',component: LoginComponent,
  
  },
  {
    path:'dash',component: DashboardComponent,canActivate:[AuthenticationGuard]
  
  },
  {
    path:'register',component: RegisterComponent,canActivate:[AuthenticationGuard]
  
  },
  {
    path:'sidebar',component:SidebarComponent,canActivate:[AuthenticationGuard]
  
  },
  {
    path:'viewusers',component:ViewusersComponent,canActivate:[AuthenticationGuard]
  
  },
  {
    path:'sample',component:SampleComponent,
  
  },
  {
    path:'test',component:TestComponent,
  
  },
  {
    path:'top',component:TopbarComponent,
  
  },
  {
    path:'wea',component:Weather1Component,
  
  },
  {
    path:'wea2',component:Weather2Component,
  
  },
  {
    path:'wea3',component:Weather3Component,
  
  },
  {
    path:'wea4',component:Weather4Component,
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
