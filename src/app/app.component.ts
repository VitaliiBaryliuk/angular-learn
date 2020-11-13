import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

//@ts-ignore
export class AppComponent {
    name = 'Tom';
    age = 25;
    colspan = 2;
    count: number = 0;
    isRed: boolean = false;
    redclass: string = 'isredbox';

    increase($event: any): void {
        this.count++;

        console.log('$EVENT', $event)
    }
}