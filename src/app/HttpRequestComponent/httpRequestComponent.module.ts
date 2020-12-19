import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { HttpRequestComponent } from './httpRequestComponent.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ HttpRequestComponent ],
  exports: [ HttpRequestComponent ]
})

export class HttpRequestComponentModule {}