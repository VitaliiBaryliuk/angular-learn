import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClassesDirectives } from './classesDirectives.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ ClassesDirectives ],
  exports: [ ClassesDirectives ]
})

export class ClassesDirectivesModule {};