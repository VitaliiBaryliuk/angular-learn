import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'forms-reactive-component',
  templateUrl: './formsReactiveComponent.component.html',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
  `],
})

export class FormsReactiveComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'userName': new FormControl('Tom', [Validators.required, this.userNameValidator]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'userPhone': new FormControl('', Validators.pattern('[0-9]{10}')),
      'phones': new FormArray([ new FormControl('+7', [Validators.required, Validators.pattern('^\\+[0-9]{11}')])])
    })
  }

  submit() {
    console.log('Reactive Form: ', this.myForm);
  }

  userNameValidator(control: FormControl): {[s:string]:boolean} {
    if (control.value === 'empty') {
      return { 'userName': true };
    }

    return null;
  }

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl("+7", [Validators.required, Validators.pattern('^\\+[0-9]{11}')]))
  }
}