import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewusersComponent } from './viewusers/viewusers.component';


const routes: Routes = [
  {
    path:'',component: LoginComponent,
  
  },
  {
    path:'dash',component: DashboardComponent,
  
  },
  {
    path:'register',component: RegisterComponent,
  
  },
  {
    path:'sidebar',component:SidebarComponent,
  
  },
  {
    path:'viewusers',component:ViewusersComponent
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
