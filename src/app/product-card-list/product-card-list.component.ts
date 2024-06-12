import { Component, Input, Output, EventEmitter, numberAttribute } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination.component.html/pagination.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
  @Input("Products")
  products !: Product[];

  @Output()
  view = new EventEmitter<Product>();

  @Input({ required: true, transform: numberAttribute })
  totalCount!: number;

  @Input({ required: true, transform: numberAttribute })
  pageSize!: number;

  @Input({ required: true, transform: numberAttribute })
  pageIndex = 1;
  
  @Output()
  pageIndexChange = new EventEmitter<number>();

  @Output()
  add = new EventEmitter<Product>();
}
