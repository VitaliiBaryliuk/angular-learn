import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormsNgFormComponent } from './formsNgFormComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ FormsNgFormComponent ],
  exports: [ FormsNgFormComponent ]
})

export class FormsNgFormComponentModule {}