import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input("Product")
  product !: Product;
  
}
