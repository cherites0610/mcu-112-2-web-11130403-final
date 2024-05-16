import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
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
