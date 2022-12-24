import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {LogginService} from "../loggin/loggin.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {


  constructor(private loginService:LogginService,
              private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 可否跳转
    return this.loginService.isLoggedIn?true:this.router.navigate(['/login']);
  }
  // 可否在sources-webpack//中看到
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoggedIn;
  }
}
