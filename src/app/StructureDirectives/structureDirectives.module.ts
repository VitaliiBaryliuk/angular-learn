import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StructureDirectives } from './structureDirectives.component';
import { WhileDirective } from './while.directive';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ StructureDirectives, WhileDirective ],
  exports: [ StructureDirectives ]
})

export class StructureDirectivesModule {}