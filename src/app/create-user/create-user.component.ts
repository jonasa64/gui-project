import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  title = 'Opret en bruger';

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  repeatpassword = new FormControl('', [Validators.required]);

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }
  }

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter an email address';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }

  getErrorRepeatpassword() {
    if (this.repeatpassword.hasError('required')) {
      return 'You must repeat password';
    }
  }

  hide = true;

  ngOnInit() {
  }
}