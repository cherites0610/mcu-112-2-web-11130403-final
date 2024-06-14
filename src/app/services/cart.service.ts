import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { Observable, of } from "rxjs";
import { CartItem } from "../model/cartItem";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private _data: CartItem[] = [];

    getCart(): Observable<CartItem[]> {
        return of(this._data);
    }

    addProduct(product: Product): Observable<CartItem[]> {
        let productIndex !: number
        if ((productIndex = this._data.findIndex((item) => product.id === item.product.id)) != -1) {
            //購物車本來就有
            this._data[productIndex].quantity++;
        } else {
            //購物車本來沒有
            let id = this._data.length+1;
            this._data.push(new CartItem({id:id,product: product,quantity: 1}))
        }
        
        return of(this._data);
    }

    removeProduct(product: Product): Observable<Product> {
        let productIndex = this._data.findIndex((item) => product.id === item.product.id);
        if(this._data[productIndex].quantity>1){
            this._data[productIndex].quantity--;
        }else{
            this._data.splice(productIndex,1);
        }
        return of(product);
    }

    removeSingleProduct(product: Product): Observable<Product> {
        let productIndex = this._data.findIndex((item) => product.id === item.product.id);
        this._data.splice(productIndex,1);
        return of(product);
    }

    removeAllProduct(): void {
        this._data = [];
    }


}