import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  details = [
    { name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
    { name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
    { name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
    { name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
    { name: "user5",num:1005,email: "e@gmail.com",  password: 1238 },

 ];

  constructor() {
    this.getDetails()
   }

   currentUser;
  

   getDetails() {
    if (localStorage.getItem("details")) {
      this.details = JSON.parse(localStorage.getItem("details"));
    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  gettoken(){
    return !!localStorage.getItem("seesionUser")
  }
//   getUsername() {
//     return JSON.parse(localStorage.getItem('currentUser')).email;
// }

  saveDetails() {
    console.log("inside dataService"+this.details)
    localStorage.setItem("details", JSON.stringify(this.details));

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }
}
