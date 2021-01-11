import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  
  todos=[];
  email=""
  pwd=""


  name1 = ""
  num1 = ""
  email1 = ""
  pwd1 = ""

  name2 = ""
  num2 = ""
  email2 = ""
  pwd2 = ""

  name3 = ""
  num3 = ""
  email3 = ""
  pwd3 = ""

  deleteForm = this.fb.group({
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]],

  });

  editForm = this.fb.group({
    name1: ['', [Validators.required]],
    num1: ['', [Validators.required, Validators.minLength(3)]],
    email1: ['', [Validators.required]],
    pwd1: ['', [Validators.required]],
    name2: ['', [Validators.required]],
    num2: ['', [Validators.required, Validators.minLength(3)]],
    email2: ['', [Validators.required]],
    pwd2: ['', [Validators.required]]
  });

  addForm = this.fb.group({
    name3: ['', [Validators.required]],
    num3: ['', [Validators.required, Validators.minLength(3)]],
    email3: ['', [Validators.required]],
    pwd3: ['', [Validators.required]]
  });

  constructor(private dataService: DataService,private fb: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.getDetails()
  }

  user=this.dataService.currentUser

  getDetails(){
    this.todos= this.dataService.details
    console.log(this.todos)
    return this.todos
   }

delete(email){
  var data = this.dataService.details;
  //var email = this.deleteForm.value.email
  var pass = this.deleteForm.value.pwd

  var users = data.filter(obj => obj.email == email && obj.password == pass);

  // for (let items of data) {
  //   if (items.email==this.deleteForm.value.email && items.password==this.deleteForm.value.pwd) {
  //       data.splice(data.indexOf(items), 1);
  //       this.dataService.saveDetails();
  //       break;
  //   }  
  //   else {
  //     alert("sorry")  
  //     break;  
  // } 

  // }

  
    for(let i = 0; i < this.todos.length; ++i){
        if (this.todos[i].email === email) {
            this.todos.splice(i,1);
            this.dataService.saveDetails();
            alert("User removed successfully")
            break;
        }
        else {
              alert("sorry")  
              break;  
          } 
    }


  

}

edit()
{

  var data = this.dataService.details;
    var email11 = this.editForm.value.email1
    var pass11 = this.editForm.value.pwd1
    var name = this.editForm.value.name
    var num = this.editForm.value.num

    var email2 = this.editForm.value.email2
    var pass2 = this.editForm.value.pwd2
    var name2 = this.editForm.value.name2
    var num2 = this.editForm.value.num2

    
    // data.map((item, i) => {
    //   if (item.email==this.editForm.value.email1 && item.password==this.editForm.value.pwd1){
    //     data[i].name = this.editForm.value.name2;
    //     data[i].num = this.editForm.value.num2;
    //      data[i].email = this.editForm.value.email2;
    //      data[i].password= this.editForm.value.pwd2;
    //      this.dataService.saveDetails();
    //      alert("user details changed successfully")
    //      console.log(data)
    //      return true;
    //    }
    //    else{
    //      alert("sorry")
    //      console.log(data)

    //    }
        
    //  });

    var flag=0
for (var i = 0; i < data.length; i++) {
  if (data[i].email==this.editForm.value.email1 && data[i].password==this.editForm.value.pwd1) {
    data[i].name = this.editForm.value.name2;
    data[i].num = this.editForm.value.num2;
     data[i].email = this.editForm.value.email2;
     data[i].password= this.editForm.value.pwd2;
     this.dataService.saveDetails();
     console.log(data)
     flag=1
    break;
  }
 
}

if (flag==1){
  alert("user details changed successfully")
}
else{
  alert("sorry")
}


}

add(){
  var data = this.dataService.details;
    var email4 = this.addForm.value.email3
    var pass4 = this.addForm.value.pwd3
    var name4 = this.addForm.value.name3
    var num4 = this.addForm.value.num3

    var users = data.filter(obj => obj.email == email4 && obj.password == pass4 );
    // && obj.name == name && obj.num == num
    //console.log(data)
    console.log(users);

    if (users.length!=0) {
      alert("User already exists")
       this.router.navigateByUrl("viewusers");

    } else   {
      alert("Added Successfully")
        data.push({
        name:name4,
        num:num4,
        email:email4,
        password:pass4,

      });
       //this.dataService.currentUser=email4
       this.dataService.saveDetails();
       //console.log("current user"+this.dataService.currentUser);
       console.log("after push to array", data)
       this.router.navigateByUrl("viewusers");

    }

    // else{
    //   alert("Sorry")
    // }


    // logout() {
    //   let token = Cookie.get('id_token');
    //   Cookie.delete('access_token');
    //   Cookie.delete('id_token');
    //   let logoutURL = "http://localhost:4200/auth/realms/baeldung/protocol/openid-connect/logout?
    //     id_token_hint=" + token + "&post_logout_redirect_uri=" + this.redirectUri;
    
    //   window.location.href = logoutURL;
    // }
    
    // saveToken(token) {
    //   var expireDate = new Date().getTime() + (1000 * token.expires_in);
    //   Cookie.set("access_token", token.access_token, expireDate);
    //   Cookie.set("id_token", token.id_token, expireDate);
    //   this.router.navigate(["/"]);
    // }


}

logout(){
  this.dataService.currentUser=""
}

}
