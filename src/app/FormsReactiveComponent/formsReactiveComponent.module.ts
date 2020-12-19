import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsReactiveComponent } from './formsReactiveComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ FormsReactiveComponent ],
  exports: [ FormsReactiveComponent ]
})

export class FormsReactiveComponentModule {}