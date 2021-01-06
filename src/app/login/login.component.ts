import { isEmptyExpression } from '@angular/compiler';
import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  pwd = ""

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    
  }


  getError(field) {
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && this.loginForm.get(field).errors;
  }

  login() {
    var data = this.dataService.details;
    var email = this.loginForm.value.email
    var pass = this.loginForm.value.pwd



    var users = data.filter(obj => obj.email == email && obj.password == pass);
    //console.log(data)
    console.log(users);

    if (users.length!=0) {
      alert("successfull login")
      this.dataService.currentUser=email
      this.dataService.saveDetails();
      //var username = JSON.parse(localStorage.getItem('this.dataService.currentUser'));
      this.router.navigateByUrl("sidebar");

    } else {
      alert("invalid login")

    }

  }
}
