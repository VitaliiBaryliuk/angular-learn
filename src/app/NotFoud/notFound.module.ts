import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './NotFound.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ NotFoundComponent ],
  exports: [ NotFoundComponent ]
})

export class NotFoundModule {}