import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'

class User {
  name: string;
  age: number;
}

@Component({
  selector: 'rxjs-error-response-processing-component',
  templateUrl: './rxjsErrorResponseProcessingComponent.component.html'
})

export class RxjsErrorResponseProcessingComponent implements OnInit {
  users: User[] = [];
  error: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsersRxjsErrorProcessing().subscribe(
      data => this.users = data,
      error => { this.error = error.message; console.log(error) }
    )
  }
}