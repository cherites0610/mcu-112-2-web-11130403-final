import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';
import { startWith, Subject, switchMap, tap } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICartForm } from '../model/ICartForm';

@Component({
  selector: 'app-shopping-car',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.css'
})
export class ShoppingCarComponent {
  private cartService = inject(CartService);
  totalCost!: number;

  form = new FormGroup<ICartForm>({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<number | null>(null, { validators: [Validators.required, Validators.pattern('^[0-9]*')] }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phone(): FormControl<number | null> {
    return this.form.get('phone') as FormControl<number | null>;
  }

  private readonly refresh$ = new Subject<void>();

  readonly cartProduct$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => (this.cartService.getCart())),
    tap((cartItems) => {
      this.totalCost = cartItems.length > 0 ? cartItems.map((item) => (item.product.price * item.quantity)).reduce((a, b) => a + b) : 0;
    }),
  )


  onAdd(product: Product): void {
    this.cartService.addProduct(product).subscribe(() => this.refresh$.next());
  }

  onRemove(product: Product): void {
    this.cartService.removeProduct(product).subscribe(() => this.refresh$.next());
  }

  onRemoveSingleProduct(product: Product): void {
    this.cartService.removeSingleProduct(product).subscribe(() => this.refresh$.next())
  }

  onRemoveAllProduct(): void {
    this.cartService.removeAllProduct();
    this.refresh$.next();
  }

  onSendCheck(): void {
    if (this.totalCost!=0) {
      alert("訂單下定成功,共" + this.totalCost + "元");
      this.cartService.removeAllProduct();
      this.refresh$.next();
    }else{
      alert("購物車爲空，不能下單")
    }
  }
}
