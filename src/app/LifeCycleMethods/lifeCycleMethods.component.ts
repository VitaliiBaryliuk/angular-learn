import { 
  Component,
  Input,
  SimpleChanges, 
  OnInit, 
  DoCheck,
  OnChanges,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'life-cycle-methods-component',
  templateUrl: './lifeCycleMethods.component.html'
})

export class LifeCycleMethodsComponent implements OnInit, 
        OnChanges, 
        DoCheck,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit {
  @Input() name: string;
  
  count: number = 1;
  
  constructor() { this.log('constructor'); }

  ngOnInit() { this.log('onInit'); }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

      this.log(`${propName}: currentValue = ${cur}, previusValue = ${prev}`);
    }
  }

  ngDoCheck() { this.log(`ngDoCheck`); }

  ngAfterViewInit() { this.log(`ngAfterViewInit`); }

  ngAfterViewChecked() { this.log(`ngAfterViewChecked`); }

  ngAfterContentInit() { this.log(`ngAfterContentInit`); }

  ngAfterContentChecked() { this.log(`ngAfterContentChecked`); }

  log(msg: string) {
    console.log(msg);
  }
}