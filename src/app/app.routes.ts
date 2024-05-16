import { Routes } from '@angular/router';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

export const routes: Routes = [
    {path: 'productPage', component: ProductCardListComponent},
    {path: 'shoppingCard', component: ShoppingCarComponent},
];
