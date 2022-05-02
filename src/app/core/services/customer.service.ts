import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerToSave } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private URL: string = 'https://vitarico-production.up.railway.app/customer';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.URL}`);
  }

  saveCustomer(customer: CustomerToSave): Observable<Customer>{
    return this.http.post<Customer>(`${this.URL}/save`, customer);
  }

  deleteCustomer(id: number):Observable<any>{
    return this.http.delete<any>(`${this.URL}/delete/${id}`)
  }
}
