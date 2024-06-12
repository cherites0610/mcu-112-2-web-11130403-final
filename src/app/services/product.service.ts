import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private _data = [
        new Product({
            id: 1,
            name: '書籍 A',
            authors: ['甲', '乙', '丙'],
            company: '博碩文件',
            isShow: true,
            isSale: false,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 100,
        }),
        new Product({
            id: 2,
            name: '書籍 B',
            authors: ['甲', '乙', '丙'],
            company: '博碩文件',
            isShow: false,
            isSale: false,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 300,
        }),
        new Product({
            id: 3,
            name: '書籍 C',
            authors: ['甲', '乙', '丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 200,
        }),
        new Product({
            id: 4,
            name: '書籍 D',
            authors: ['甲', '乙', '丙'],
            company: '博碩文件',
            isShow: true,
            isSale: true,
            imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
            createDate: new Date(),
            price: 500,
        }),
    ];

    getProducts(): Observable<Product[]> {
        return of(this._data).pipe(delay(200));
    }

    getProductById(productId: number): Observable<Product> {
        const product = this._data.find(({ id }) => id === productId)!;
        return of(product).pipe(delay(500));
    }
}
