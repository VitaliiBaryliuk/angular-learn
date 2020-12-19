import { Component, ViewChild, ElementRef} from '@angular/core';
import { TemplateVariablesChild } from './templateVariablesChild.component';

@Component({
  selector: 'template-variables-component',
  templateUrl: './teamplateVariables.component.html' 
})

export class TemplateVariables {
  name: string = 'teamplateVariables';

  @ViewChild (TemplateVariablesChild, { static: false })
  private counterComponent: TemplateVariablesChild;

  @ViewChild ('nameText', { static: false })
  nameParagraph: ElementRef;
 
  decrement() {
    this.counterComponent.decrement();
  }

  change() {
    console.log(this.nameParagraph.nativeElement.textContent);
    this.nameParagraph.nativeElement.textContent = 'Changed text';
  }

}