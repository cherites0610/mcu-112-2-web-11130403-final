import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/products';

  private readonly httpClient = inject(HttpClient);

  override getProducts(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    const query: { [key: string]: string | number|boolean } = { _page: pageIndex, _limit: pageSize , isShow: true };
    if (name) query['name'] = name;
    const params = new HttpParams({ fromObject: query });
    return this.httpClient.get<Product[]>(this.url, { params });
  }

  override getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${productId}`);
  }

  override getCount(name?: string): Observable<number> {
    const option = name ? { params: new HttpParams().set('name', name) } : {};
    return this.httpClient.get<Product[]>(this.url, option).pipe(map((data) => data.length));
  }
}