import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'forms-reactive-form-builder-component',
  templateUrl: './formsReactiveFormBuilderComponent.component.html',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
  `],
})

export class FormsReactiveFormBuilderComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userName': new FormControl('Tom', Validators.required),
      'userEmail': new FormControl('', [ Validators.required, Validators.email ]),
      'phones': formBuilder.array([["+7", Validators.required] ])
    })
  }

  addPhone(){
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
  }

  submit(){
      console.log(this.myForm);
  }
}