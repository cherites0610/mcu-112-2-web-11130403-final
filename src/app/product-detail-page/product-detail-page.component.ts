import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

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
  cartService = inject(CartService);

  onBack = () => {
    this.router.navigate(["/products"]);
  }

  onAdd = (product: Product) => {
    this.cartService.addProduct(product);
    alert('已加入購物車');
  }

  ngOnInit(): void {
    this.productSevice.getProductById(this.id).subscribe((item) => this.product=item);
  }
}
