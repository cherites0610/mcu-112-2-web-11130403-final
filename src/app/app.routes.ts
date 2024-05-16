import { Routes } from '@angular/router';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products', component: ProductPageComponent },
    { path: 'shoppingCard', component: ShoppingCarComponent },
    { path: 'product/view/:id', component: ProductDetailPageComponent }
];
