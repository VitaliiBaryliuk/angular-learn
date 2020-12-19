import { Component } from '@angular/core';
import { HttpService } from './../services/http.service';
import { User } from './User';

@Component({
  selector: 'http-request-component',
  templateUrl: './httpRequestComponent.component.html',
  providers: [ HttpService ]
})

export class HttpRequestComponent {
  user: User;
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUser().subscribe((data: User) => {
      this.user = data;
    })

    this.httpService.getUsers().subscribe((data: User[]) => {
      this.users = data['userList'];
    })
  }
}