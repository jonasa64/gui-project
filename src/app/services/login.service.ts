import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

  login(username, password) {
    if (username === 'anne' && password === 'anne123') {
      return true;
    }

    return false;
  }


}