import { inject, Injectable } from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "./product.service";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private _data: Product[] = [
        new Product({
            id: 1,
            name: '書籍 A',
            authors: ['甲', '乙', '丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            quantity: 1,
            createDate: new Date(),
            price: 10000,
        })
    ];

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

    getTotalCost(): number {
        let result = this._data.length>0 ?this._data.map((item) => (item.price * item.quantity)).reduce((a,b)=>a+b):0;
        return result;
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
}