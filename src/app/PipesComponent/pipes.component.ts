import { Component } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'pipes-component',
  templateUrl: './pipes.component.html',
  providers: [ HttpService ]
})

export class PipesComponent {
  myDate = new Date(1961, 3, 12);
  welcome: string = "Hello World!";
  persentage: number = 0.14;
  pi: number = 3.1415;
  money: number = 23.45;
  x: number = 15.45;
  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
  num: number = 15.45;
  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phone: Observable<string>;
  usersAsync: Observable<Object>;

  constructor(private httpService: HttpService) {
    this.showPhones();
  }

  ngOnInit() {
    this.usersAsync = this.httpService.getUsersArr();
  }

  showPhones() {
    this.phone = interval(500).pipe(map((i:number)=> { 
      return this.phones[i]
    }));
  }
}