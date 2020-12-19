import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'forms-ngForm-component',
  templateUrl: './formsNgFormComponent.component.html',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
  `]
})

export class FormsNgFormComponent {
  name: string;
  emial: string;
  phone: string;

  submit(form: NgForm) {
    console.log('My form', form)
  }
}