import { inject, Injectable } from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "./product.service";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private _data: Product[] = [];

    getCart(): Observable<Product[]> {
        return of(this._data);
    }

    addProduct(product: Product): Observable<Product> {
        let productIndex !: number
        if ((productIndex = this._data.findIndex(({ id }) => product.id === id)) != -1) {
            //購物車本來就有
            this._data[productIndex].quantity++;
        } else {
            //購物車本來沒有
            product.quantity++;
            this._data.push(product)
        }
        
        return of(product);
    }

    removeProduct(product: Product): Observable<Product> {
        let productIndex = this._data.findIndex(({ id }) => product.id === id);
        if(this._data[productIndex].quantity>1){
            this._data[productIndex].quantity--;
        }else{
            this._data.splice(productIndex,1);
        }
        return of(product);
    }

    onAllRemove(product: Product): Observable<Product> {
        let productIndex = this._data.findIndex(({ id }) => product.id === id);
        this._data.splice(productIndex,1);
        return of(product);
    }
}