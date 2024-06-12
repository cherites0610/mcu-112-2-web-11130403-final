import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';
import { delay, startWith, Subject, switchMap, tap } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-car',
  standalone: true,
  imports: [AsyncPipe,CurrencyPipe],
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.css'
})
export class ShoppingCarComponent {
  private cartService = inject(CartService);
  cartProdcuts!: Product[]
  totalCost!: number;

  private readonly refresh$ = new Subject<void>();

  readonly cartProduct$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => (this.cartService.getCart())),
    tap((products) => {
      this.totalCost = products.length > 0 ? products.map((item) => (item.price * item.quantity)).reduce((a, b) => a + b) : 0;
    }),
  )


  onAdd(product: Product): void {
    this.cartService.addProduct(product).subscribe(() => this.refresh$.next());
  }

  onRemove(product: Product): void {
    this.cartService.removeProduct(product).subscribe(() => this.refresh$.next());
  }

  onAllRemove(product: Product): void {
    this.cartService.onAllRemove(product).subscribe(() => this.refresh$.next())
  }
}
