import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service'


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginservice: LoginService, private _router: Router) { }

  canActivate() {
    if (this._loginservice.isLoggedIn) {

      return true;
    }
    this._router.navigate(['login']);
    return false;
  }



}