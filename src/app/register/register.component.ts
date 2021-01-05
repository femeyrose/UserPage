import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = ""
  num = ""
  email = ""
  pwd = ""

  signForm = this.fb.group({
    name: ['', [Validators.required]],
    num: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private router: Router,private dataService: DataService,) { }

  ngOnInit(): void {
  }

  getError(field){
    return(this.signForm.get(field).touched||this.signForm.get(field).dirty)&& this.signForm.get(field).errors;
  
  }

  sign(){
    
    var data = this.dataService.details;
    var email = this.signForm.value.email
    var pass = this.signForm.value.pwd
    var name = this.signForm.value.name
    var num = this.signForm.value.num

    var users = data.filter(obj => obj.email == email && obj.password == pass );
    // && obj.name == name && obj.num == num
    //console.log(data)
    console.log(users);

    if (users.length!=0) {
      alert("Account already exists. Please login")
       this.router.navigateByUrl("");

    } else if(JSON.stringify(users)! === '{}')  {
      alert("Registered Successfully")
        data.push({
        name:name,
        num:num,
        email:email,
        password:pass,

      });
       this.dataService.saveDetails();
       console.log("current user"+this.dataService.currentUser);
       console.log("after push to array", data)
       this.router.navigateByUrl("dash");

    }

    else{
      alert("Cannot be Registered")
    }

  }



}
