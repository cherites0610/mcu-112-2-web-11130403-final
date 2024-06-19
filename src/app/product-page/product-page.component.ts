import { Component, inject, Output } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, startWith, Subject, switchMap, tap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent, AsyncPipe, JsonPipe, ReactiveFormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private productService: ProductService = inject(ProductService)
  private cartService: CartService = inject(CartService);

  router = inject(Router)

  private readonly refresh$ = new Subject<void>()

  protected readonly formControl = new FormControl<string | undefined>(undefined, { nonNullable: true });

  protected pageSize = 5;

  private readonly condition$ = new BehaviorSubject<string | undefined>(undefined);
  get condition() {
    return this.condition$.value;
  }
  set condition(value: string | undefined) {
    this.condition$.next(value);
  }

  private readonly pageIndex$ = new BehaviorSubject<number>(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  readonly products$ = combineLatest([
    this.refresh$.pipe(
      startWith(undefined),
      tap((condition) => console.log('refresh', condition))
    ),
    this.condition$.pipe(tap((condition) => console.log('condition', condition))),
    this.pageIndex$.pipe(tap((index) => console.log('pageIndex', index))),
  ]).pipe(
    tap((data) => console.log(data)),
    switchMap(([_, condition, pageIndex]) => this.productService.getProducts(condition, pageIndex, this.pageSize)),
    tap((data) => console.log(data))
  );

  readonly totalCount$ = combineLatest([this.refresh$.pipe(startWith(undefined)), this.condition$]).pipe(
    switchMap(([_, condition]) => this.productService.getCount(condition))
  );

  onPageIndexChange(index: number): void {
    console.log(index);
    this.pageIndex = index;
  }

  @Output()
  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }


  @Output()
  onAdd(product: Product): void {
    this.cartService.addProduct(product);
  }

}
