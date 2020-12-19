import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services.component';
import { DataComponent } from './data.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ ServicesComponent, DataComponent ],
  exports: [ ServicesComponent ]
})

export class ServicesComponentModule {}