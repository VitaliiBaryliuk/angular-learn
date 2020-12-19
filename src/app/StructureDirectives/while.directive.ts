import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[while]' })
//@ts-ignore
export class WhileDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}
    
  //@ts-ignore
  @Input() set while(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  } 
}