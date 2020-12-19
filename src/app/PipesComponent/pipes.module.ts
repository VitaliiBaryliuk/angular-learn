import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes.component';
import { FormatPipe } from "./format.pipe";
import { JoinPipe } from "./join.pipe";
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ PipesComponent, FormatPipe, JoinPipe ],
  exports: [ PipesComponent ]
})

export class PipesModule {}