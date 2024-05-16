import { Routes } from '@angular/router';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    {path: 'productPage', component: ProductPageComponent},
    {path: 'shoppingCard', component: ShoppingCarComponent},
];
