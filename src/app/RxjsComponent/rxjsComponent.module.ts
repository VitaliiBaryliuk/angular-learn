import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjsComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ RxjsComponent ],
  exports: [ RxjsComponent ]
})

export class RxjsComponentModule {}