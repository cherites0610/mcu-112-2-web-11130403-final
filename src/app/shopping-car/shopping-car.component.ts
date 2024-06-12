import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';
import { delay, startWith, Subject, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-car',
  standalone: true,
  imports: [AsyncPipe],
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
    delay(500),
    switchMap(() => (this.cartService.getCart()))
  )


  onAdd(product: Product): void {
    this.cartService.addProduct(product).subscribe(() => this.refresh$.next());

  }

  onRemove(product: Product): void {
    this.cartService.removeProduct(product).subscribe(() => this.refresh$.next());
  }
}
