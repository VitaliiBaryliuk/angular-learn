import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'template-variables-child',
  template: `
  <ng-content></ng-content>
  <button (click)="changeChildComponentText()">Change child header content</button>
  <br>
  <p>{{counter}}</p>
  `
})

export class TemplateVariablesChild {
  counter: number = 0;

  @ContentChild('headerContent', { static: false })
  header: ElementRef;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
  
  changeChildComponentText() {
    console.log(this.header); 
    this.header.nativeElement.textContent = "Changed content"; 
  }
}