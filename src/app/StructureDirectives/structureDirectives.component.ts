import { Component } from '@angular/core';

@Component({
  selector: 'structure-directives-component',
  templateUrl: './structureDirectives.component.html',
  styles: []
})

export class StructureDirectives {
  condition: boolean = true;
  condition2: boolean = true;
  
  items =["Tom", "Bob", "Sam", "Bill"];
  count: number = 5;

  toggle() {
    this.condition = !this.condition;
  }

  toggle2() {
    this.condition2 = !this.condition2;
  }
}