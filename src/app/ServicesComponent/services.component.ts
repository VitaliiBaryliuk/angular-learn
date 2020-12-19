import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'services-component',
  templateUrl: 'services.component.html',
  // providers: [ DataService, LogService ]
})

export class ServicesComponent {
  items: string[] = [];
  name: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getData();
  }

  addItem(name: string) {
    this.dataService.addData(name);
  }
}