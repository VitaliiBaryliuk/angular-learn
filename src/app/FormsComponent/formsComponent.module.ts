import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './formsComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ FormsComponent ],
  exports: [ FormsComponent ]
})

export class FormsComponentModule {}