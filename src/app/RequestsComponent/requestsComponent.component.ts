import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

class User {
  name: string;
  age: number;
}

@Component({
  selector: 'requests-component',
  templateUrl: './requestsComponent.component.html',
  providers: [ HttpService ]
})

export class RequestsComponent {
  num1: number;
  num2: number;
  sum: number;
  done: boolean;
  user: User = new User();
  doneUser: boolean;
  recivedUser: User;

  constructor(private httpService: HttpService) {}

  submit() {
    this.httpService.getSum(this.num1, this.num2).subscribe((data: any) => {
      this.sum = data.result;
      this.done = true;
    })
  }

  submitUser(user: User) {
    this.httpService.postData(user).subscribe(
      (data: User) => { 
        this.recivedUser = data; 
        this.doneUser = true;
      }),
      error => console.log(error)
  }

}