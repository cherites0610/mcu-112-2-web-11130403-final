import { inject, Injectable } from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private _data: Product[] = [];
    private productService = inject(ProductService);

    getCart(): Product[] {
        return this._data;
    }

    addCart(product: Product) {
        let productIndex !:number
        if ((productIndex = this._data.findIndex(({ id }) => product.id === id)) != -1){
            //購物車本來就有
            this._data[productIndex].quantity++;
        }else{
            //購物車本來沒有
            product.quantity ++;
            this._data.push(product)
        }
    }
}