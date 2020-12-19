import { Component, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

//@ts-ignore
export class AppComponent implements OnChanges {
    name: string = 'Tom';
    age: number = 25;
    colspan: number = 2;
    count: number = 0;
    isRed: boolean = false;
    redclass: string = 'isredbox';
    clicks: number = 0;

    increase($event: any): void {
        this.count++;

        console.log('$EVENT', $event)
    }

    onChanged(increased: any) {
        console.log('INCREASED', increased)
        increased ? this.clicks++ : this.clicks--;
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
          let chng = changes[propName];
          let cur  = JSON.stringify(chng.currentValue);
          let prev = JSON.stringify(chng.previousValue);
          this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
   
    private log(msg: string) {
        console.log(msg);
    }
}