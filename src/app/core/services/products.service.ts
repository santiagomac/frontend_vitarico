import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private URL: string = 'https://vitarico-production.up.railway.app/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  saveProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.URL}/save`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/delete/${id}`);
  }
}
