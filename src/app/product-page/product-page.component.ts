import { Component } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products = [
    new Product({
      id: 1,
      name: "A",
      authors: ["A", "B"],
      company: "A公司",
      isShow: true,
      isSale: true,
      imgUrl: "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
      createDate: new Date(),
      price: 1000,
    }),
    new Product({
      id: 2,
      name: "B",
      authors: ["A","B"],
      company: "B公司",
      isShow: true,
      isSale: true,
      imgUrl: "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
      createDate: new Date(),
      price: 2000,
    })
  ]
}
