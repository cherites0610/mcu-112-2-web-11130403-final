import { Component } from '@angular/core';
import { Product } from '../model/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = new Product({
    id: 1,
    name: "test",
    authors: ["A","B"],
    company: "test公司",
    isShow: true,
    isSale: true,
    imgUrl: "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
    createDate: new Date(),
    price: 2000,
  })
}
