import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TemplateVariables } from './templateVariables.component';
import { TemplateVariablesChild } from './templateVariablesChild.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ TemplateVariables, TemplateVariablesChild ],
  exports: [ TemplateVariables ]
})

export class TemplateVariablesModule {};