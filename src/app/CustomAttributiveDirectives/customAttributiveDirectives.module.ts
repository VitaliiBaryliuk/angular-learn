import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomAttributiveDirectives } from './customAttributiveDirectives.component';
import { BoldDirective } from './bold.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ CustomAttributiveDirectives, BoldDirective ],
  exports: [ CustomAttributiveDirectives ]
})

export class CustomAttributiveDirectivesModule {}