import {Component, OnInit} from '@angular/core';
import {DataService} from '../core/data.service';
import {ActivatedRoute} from '@angular/router';
import {ICustomer, IOrder} from '../shared/interfaces';

@Component({
  selector: 'orders',
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.css']
})
export class OrdersComponent implements OnInit {
  customer: ICustomer | null = null;
  orders: IOrder[] = [];
  currencyCode = 'EUR';

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);

    this.dataService.loadCustomer(id)
      .subscribe(customer => this.customer = customer);

    this.dataService.loadOrders(id)
      .subscribe(orders => this.orders = orders);

  }

}
