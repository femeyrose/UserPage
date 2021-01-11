import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor (private dataService:DataService, private router:Router) {}
  
  canActivate () :boolean
  {

    if(!this.dataService.gettoken()){

      this.router.navigateByUrl("/");
      // return confirm("are you sure?")
    }
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataService.gettoken();
  }
  
}

//refered the steps from https://www.c-sharpcorner.com/article/angular-authguard/
