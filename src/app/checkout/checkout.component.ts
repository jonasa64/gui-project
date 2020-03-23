import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardValidator } from './cardValidtor';

/**
 *  CheckoutComponent
 */


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;

  constructor(private formBulider: FormBuilder) {
    this.form = this.formBulider.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: [''],
      address: ['', Validators.required],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      billingAddress: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      name: ['', Validators.required],
      creditCardNumber: ['', Validators.compose([Validators.required, CardValidator.validateCardNumber])],
      Expiration: ['', Validators.required],
      cvv: ['', Validators.required],


    });

  }

  onSubmit() {
    if (this.form.valid) {
      console.log('valid');
    } else {
      console.log("incalid", this.form.get("creditCardNumber").hasError('invalidCreditCard'));
    }


  }

  ngOnInit(): void {
  }

}
