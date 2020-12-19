import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

export class User {
  name: string;
  age: string;
}

@Component({
  selector: 'rxjs-component',
  templateUrl: './rxjsComponent.component.html',
  providers: [ HttpService ]
})

export class RxjsComponent implements OnInit {
  users: User[]=[];
     
  constructor(private httpService: HttpService){}
    
  ngOnInit() {    
    this.httpService.getUsersRxjs().subscribe(data => {
      this.users=data
    });
  }
}