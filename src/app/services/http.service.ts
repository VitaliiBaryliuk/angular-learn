import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../types';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('assets/user.json');
  }

  getUsers() {
    return this.http.get('assets/users.json');
  }

  getUsersArr() {
    return this.http.get('assets/usersArr.json');
  }

  getUsersRxjs(): Observable <any> {
    return this.http.get('assets/usersRxjs.json').pipe(map(data => {
      const usersList = data['userList'];

      return usersList.map((user: any) => ({ name: user.userName, age: user.userAge }));
    }))
  }

  getUsersRxjsErrorProcessing(): Observable <any> {
    return this.http.get('assets/usersRxjsP.json').pipe(map(data => {
      const usersList = data['userList'];

      return usersList.map((user: any) => ({ name: user.userName, age: user.userAge }));
    }),
      catchError(err => {
        console.log('err', err);
        return throwError(err);
      })
    )
  }

  getSum(num1: number, num2: number) {
    const params = new HttpParams()
    .set('num1', num1.toString())
    .set('num2', num2.toString());

    return this.http.get(`http://localhost:3000/sum`, {params}).pipe(
      (data) => data,
      catchError(err => {
        console.log('err', err);
        return throwError(err);
      })
    );
  }

  postData(user: User) {
    const body = { name: user.name, age: user.age };
    // const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');

    return this.http.post('http://localhost:3000/postuser', body);
  }
}
