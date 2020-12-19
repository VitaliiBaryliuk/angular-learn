import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RequestsComponent } from './requestsComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ RequestsComponent ],
  exports: [ RequestsComponent ]
})

export class RequestsComponentModule {}