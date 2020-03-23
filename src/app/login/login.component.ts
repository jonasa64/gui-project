import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PasswordValidator } from './passwordvalidator'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  form: FormGroup;
  //{
  /*   username: new FormControl('',
     Validators.required),
     password : new FormControl('',Validators.required)
 });*/

  constructor(fb: FormBuilder, private _loginService: LoginService, private router: Router) {
    this.form = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.compose([Validators.required, PasswordValidator.canNotContainSpace])]
    })
  }

  login() {
    let result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLognin: true
      });
    }

    this.router.navigate(['my-page']);

  }

}
