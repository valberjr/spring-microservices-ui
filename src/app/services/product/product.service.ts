import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);

  constructor() {}

  getProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      'http://localhost:9000/api/product'
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      'http://localhost:9000/api/product',
      product
    );
  }
}
