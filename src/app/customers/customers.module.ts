import {NgModule} from '@angular/core';
import {CustomersComponent} from './customers.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FilterInputComponent} from './customers-list/filter-input.component';
import {FormsModule} from '@angular/forms';
import {CustomersRoutingModule} from './customers-routing.module';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterInputComponent],
  exports: [CustomersComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule {
}
