import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RxjsErrorResponseProcessingComponent } from './rxjsErrorResponseProcessingComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ RxjsErrorResponseProcessingComponent ],
  exports: [ RxjsErrorResponseProcessingComponent ]
})

export class RxjsErrorResponseProcessingComponentModule {}