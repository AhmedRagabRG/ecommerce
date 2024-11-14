import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'products', redirectTo: 'products/1', pathMatch: 'full'},
    {path: 'products/:id', component: ProductsComponent},
    {path: '**', component: NotfoundComponent},
];
