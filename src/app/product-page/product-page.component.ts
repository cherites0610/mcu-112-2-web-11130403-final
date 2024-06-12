import { Component, inject, Output } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent,AsyncPipe],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private productService: ProductService = inject(ProductService)
  private cartService: CartService = inject(CartService);

  router = inject(Router)
  private readonly refresh$ = new Subject<void>()

  readonly products$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getProducts())
  );

  @Output()
  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }


  @Output()
  onAdd(product: Product): void {
    this.cartService.addProduct(product);
    alert('已加入購物車');
  }

}
