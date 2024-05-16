import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
