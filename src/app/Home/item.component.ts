import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'item-info',
  template: `<h3>Model {{id}}</h3>
    <div>Product: {{product}}</div>
    <div>Peice: {{price}}</div>
  `
})

export class ItemComponent {
  id: number;
  product: string;
  price: string;
  
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  
  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.product = queryParam['product'];
      this.price = queryParam['price'];
    })
  }

  // ngOnInit() {
  //   this.activateRoute.paramMap.pipe(
  //       switchMap(params => params.getAll('id'))
  //   )
  //   .subscribe(data=> this.id = +data);
  // }
}