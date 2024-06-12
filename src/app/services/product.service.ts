import { Injectable } from "@angular/core";
import { Product } from "../model/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private _data = [
        new Product({
            id: 1,
            name: '書籍 A',
            authors: ['作者甲', '作者乙', '作者丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 10000,
        }),
        new Product({
            id: 2,
            name: '書籍 B',
            authors: ['作者甲', '作者乙', '作者丙'],
            company: '博碩文件',
            isShow: true,
            isSale: false,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 10000,
        }),
        new Product({
            id: 3,
            name: '書籍 C',
            authors: ['作者甲', '作者乙', '作者丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 10000,
        }),
        new Product({
            id: 4,
            name: '書籍 D',
            authors: ['作者甲', '作者乙', '作者丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 10000,
        }),
    ];

    getProducts(): Product[] {
        return this._data;
    }

    addProduct(product: Product): void {
        const id = this._data.length === 0 ? 1 : Math.max( ...this._data.map(({id}) => id) ) + 1;
        product.id = id;
        product.name = String.fromCharCode(96+id);
        this._data.push(product);
    }

    removeProduct(productId: number): void {
        const index = this._data.findIndex(({ id }) => { return id == productId })
        this._data.splice(index, 1);
    }
}
