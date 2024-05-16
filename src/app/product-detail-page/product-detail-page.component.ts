import { Component, inject, Input } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  router = inject(Router)

  onBack = () => {
    this.router.navigate(["/products"]);
  }

  product = new Product({
    id: 1,
    name: "A",
    authors: ["A", "B"],
    company: "A公司",
    isShow: true,
    isSale: true,
    imgUrl: "https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img",
    createDate: new Date(),
    price: 1000,
  })
}
