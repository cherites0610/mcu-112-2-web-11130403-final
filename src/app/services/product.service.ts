import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private _data: Product[] = [];

    getProducts(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
        return of(this._data);
    }

    getProductById(productId: number): Observable<Product> {
        const product = this._data.find(({ id }) => id === productId)!;
        return of(product).pipe(delay(500));
    }

    getCount(name?: string): Observable<number> {
        throw new Error('NO');
    }
}
