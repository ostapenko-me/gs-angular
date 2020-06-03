import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule],
  exports: [OrdersComponent]
})
export class OrdersNodule {
}
