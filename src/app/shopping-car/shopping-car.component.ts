import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-shopping-car',
  standalone: true,
  imports: [],
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.css'
})
export class ShoppingCarComponent {
  private cartService = inject(CartService);
  cartProdcuts!: Product[]
  totalCost!: number;

  ngOnInit(): void {
    this.cartProdcuts = this.cartService.getCart();
    this.totalCost = this.cartService.getTotalCost();
  }

  onAdd(product: Product): void {
    this.cartService.addProduct(product);
  }

  onRemove(product: Product): void {
    this.cartService.removeProduct(product);
  }
}
