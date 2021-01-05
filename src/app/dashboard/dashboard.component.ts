import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private dataService: DataService,
    private router: Router) 
    {
      
      this.getdetails()
    }

  ngOnInit(): void {
  }

  
  user=this.dataService.currentUser

  getdetails()
{
   console.log("user"+this.dataService.currentUser)
}




}
