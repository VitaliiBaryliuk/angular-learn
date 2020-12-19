import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string
  ) {}
}

export class User{
  name: string; 
  email: string;
  phone: string;
}

@Component({
  selector: 'forms-component',
  templateUrl: './formsComponent.component.html',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
  `],
 
})

export class FormsComponent {
  title: string;
  price: number;
  company: string;

  phone: Phone = new Phone("", 0, "Huawei");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
 
  user: User = new User();

  addUser(){
      console.log(this.user);
  }
  
  addPhone(title: NgModel, price: NgModel, company: NgModel) {
    // this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    console.log(title);
    console.log(price);
    console.log(company);
  }

  onTitleChange(){  
    if(this.phone.title=="empty")
      this.phone.title = "Unknown";
  }
}