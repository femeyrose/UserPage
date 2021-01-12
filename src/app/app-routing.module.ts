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
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
