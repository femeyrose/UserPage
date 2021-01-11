import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router) { 
      this.getdetails()
    }

  ngOnInit(): void {
  }


  user=this.dataService.currentUser

  getdetails()
{
   console.log("user"+this.dataService.currentUser)
}

logout(){
  this.user="";
}




}
