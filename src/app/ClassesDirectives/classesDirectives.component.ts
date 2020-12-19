import { Component } from '@angular/core';

@Component({
  selector: 'classes-directives-component',
  templateUrl: './classesDirectives.component.html',
  styleUrls: ['./classesDirectives.component.css']
})

export class ClassesDirectives {
  isVerdana: boolean = true;
  isSegoe: boolean = true;
  isNavy: boolean = true;
  visibility: boolean = true;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy
  };

  toggle() {
    this.visibility = !this.visibility;
  }
}