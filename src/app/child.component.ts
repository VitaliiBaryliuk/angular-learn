import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <ng-content></ng-content>
    <h2>Welcome! {{userName}}</h2>
    <h3>Using props</h3>
    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>
    <h3>Bind event of child component</h3>
    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>
    <h3>Bind event of parrent component</h3>
    <p>two side connection</p>
    <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
  `,
  styles: [`h2, p { color: red; }`]
})

export class ChildComponent {
  // name="John";
  // @Input() userAge: number;

  /* GETTERS AND SETTERS */
  _userAge: number;
  
  @Input()
  set userAge(age:number) {
    if(age<0)
    this._userAge=0;
    else if(age>100)
    this._userAge=100;
    else
    this._userAge = age;
  }
  
  get userAge() { return this._userAge; }
  
  /* BIND EVENT TO PERRENT COMPONENT (on direction binding) */

  @Output() onChanged = new EventEmitter<boolean>();
  
  change(increased: any) {
    this.onChanged.emit(increased);
  }

  /* TO SIDES BINDING EVENT BETWEEN PERRENT AND CHILD COMPONENT (two direction binding) */

  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();

  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}