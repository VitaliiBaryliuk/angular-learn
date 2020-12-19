import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './exit.about.guard';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'about-app',
  templateUrl: './about.component.html'
})

export class AboutComponent implements ComponentCanDeactivate {
  saved: boolean = false;
  constructor(private router: Router) {}

  save() {
    this.saved = true;
  }
  
  goHome() {
    this.router.navigate(['']);
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(!this.saved) {
      return confirm('Are you sure want to leave the page');
    } else {
      return true
    }
  }
}