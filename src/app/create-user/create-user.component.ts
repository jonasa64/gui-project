import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { AuthGuard } from '../services/authguard.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  title = 'Opret en bruger';
   angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       lastname: ['', Validators.required ],
       email: ['', Validators.required ],
       number: ['', Validators.required ],
       password: ['', Validators.required ],
       repeatpassword: ['', Validators.required ]
    });
  }
}