import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../../shared/interfaces';
import {SorterService} from '../../core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: 'customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
  customers: ICustomer[] = [];
  totalOrder: number = 0;
  currencyCode = 'EUR';

  constructor(private sorterService: SorterService) {

  }

  private _allCustomers: ICustomer[] = [];

  @Input() get allCustomers(): ICustomer[] {
    return this._allCustomers;
  }

  set allCustomers(value: ICustomer[]) {
    this._allCustomers = this.customers = value;
    this.countTotal();
  }

  ngOnInit(): void {
  }

  countTotal() {
    this.totalOrder = this.customers.reduce((total, order) => total + order.orderTotal, 0);
  }

  sort(field: keyof ICustomer) {
    this.sorterService.sort(this.customers, field);
  }

  filter(data: string): void {
    if (data) {
      this.customers = this.allCustomers.filter((item: ICustomer) => {
        return item.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          item.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          item.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.customers = this.allCustomers;
    }
    this.countTotal();
  }
}
