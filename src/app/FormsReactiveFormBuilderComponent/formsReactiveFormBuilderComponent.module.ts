import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsReactiveFormBuilderComponent } from './formsReactiveFormBuilderComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ FormsReactiveFormBuilderComponent ],
  exports: [ FormsReactiveFormBuilderComponent ]
})

export class FormsReactiveFormBuilerComponentModule {}