import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {ICustomer, IOrder} from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl = 'assets/';

  constructor(private http: HttpClient) {
  }

  loadCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  loadCustomer(id: number): Observable<ICustomer | null> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        map(customers => customers.find(customer => customer.id === id) || null),
        catchError(this.handleError)
      );
  }

  loadOrders(customerId: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
      .pipe(
        map(orders => orders.filter(order => order.customerId === customerId)),
        catchError(this.handleError)
      );
  }

  handleError(exception: { error: Error } | any): Observable<any> {
    console.log('Server Error %o', exception);

    if (exception.error instanceof Error) {
      return throwError(exception.error.message);
    }
    return throwError(exception.error);
  }
}
