import { Component, inject, Output } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private productService: ProductService = inject(ProductService)
  private cartService: CartService = inject(CartService);
  products!: Product[];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  router = inject(Router)

  @Output()
  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }


  @Output()
  onAdd(product: Product): void {
    this.cartService.addProduct(product);
  }

}
