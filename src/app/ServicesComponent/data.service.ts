import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    if (this.logService) this.logService.write("Get data operation");

    return this.data;
  }

  addData(name: string): void {
    if (this.logService) this.logService.write("Add data operation");
    
    this.data.push(name)
  }
}