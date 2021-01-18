import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getdetails()
  }

  user=this.dataService.currentUser

  getdetails()
{
   console.log("user"+this.dataService.currentUser)
}
}
