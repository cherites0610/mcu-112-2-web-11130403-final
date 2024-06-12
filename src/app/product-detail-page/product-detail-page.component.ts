import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  @Input({ transform: numberAttribute })
  id!: number;
  
  product !: Product;

  router = inject(Router)
  productSevice = inject(ProductService);
  onBack = () => {
    this.router.navigate(["/products"]);
  }


  ngOnInit(): void {
    this.product = this.productSevice.getProductById(this.id);
  }
}
