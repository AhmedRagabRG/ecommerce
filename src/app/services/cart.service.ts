import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ICart } from '../components/cart/interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: ICart[] = [];
  
  constructor(private _productsService: ProductsService) { }

  addToCart(id: number): void {
    const product = this._productsService.getProductById(id);
    if (!product) return;
    if (product.quantity === 0) return;

    const itemInCart = this.cart.find((p) => p.id === product.id);

    if (product.quantity > 0) product.quantity--;

    if (itemInCart) {
      itemInCart.amount++;
      return;
    };

    this.cart.push({
     ...product,
      amount: 1 
    });
  }
}
