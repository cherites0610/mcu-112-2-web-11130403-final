import { inject, Injectable } from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "./product.service";

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
    private productService = inject(ProductService);

    getCart(): Product[] {
        return this._data;
    }

    addProduct(product: Product) {
        let productIndex !: number
        if ((productIndex = this._data.findIndex(({ id }) => product.id === id)) != -1) {
            //購物車本來就有
            this._data[productIndex].quantity++;
        } else {
            //購物車本來沒有
            product.quantity++;
            this._data.push(product)
        }
    }

    getTotalCost(): number {
        return this._data.map((item) => (item.price * item.quantity)).reduce((a,b)=>a+b);
    }

    removeProduct(product: Product): void {
        let productIndex = this._data.findIndex(({ id }) => product.id === id);
        if(this._data[productIndex].quantity>1){
            this._data[productIndex].quantity--;
        }else{
            this._data.splice(productIndex,1);
        }
    }
}