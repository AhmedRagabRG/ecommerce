import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ICart } from '../components/cart/interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: ICart[] = [];
  
  constructor(private _productsService: ProductsService) { }

  addToCart(id: number): boolean {
    const product = this._productsService.getProductById(id);
    if (!product) return false;
    if (product.quantity === 0) return false;

    const itemInCart = this.cart.find((p) => p.id === product.id);

    if (itemInCart) {
      this.incressAmount(product.id);
      return false;
    };

    this.cart.push({
     ...product,
      amount: 1 
    });

    return true
  }

  remmoveFromCart(id: number): ICart[] {
    return this.cart = this.cart.filter((p) => p.id !== id);
  }

  fintItemInCart(id: number): ICart | undefined {
    return this.cart.find((p) => p.id === id);
  }

  decreaseAmount(id: number): ICart[] {
    const itemInCart = this.fintItemInCart(id);
    if (itemInCart) {
      itemInCart.amount--;
      if (itemInCart.amount === 0) {
        this.remmoveFromCart(id);
      }
    }
    
    return this.cart;
  }

  incressAmount(id: number): ICart[] {
    const product = this._productsService.getProductById(id);
    if (!product) return this.cart;

    const itemInCart = this.fintItemInCart(id);
    if (!itemInCart) return this.cart;

    if (product.quantity <= itemInCart.amount) return this.cart;
    
    itemInCart.amount++;
    return this.cart;
  }
}
