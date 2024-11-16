import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICart } from './interfaces/cart';
import { CurrencyPipe } from '@angular/common';
import { TotalAmountPipe } from '../../pipes/total-amount.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, TotalAmountPipe],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: ICart[] = [];

  constructor(private _CartService: CartService) {
    this.cart = this._CartService.cart;
  }

  removeItem(id: number): void {
    this.cart = this._CartService.remmoveFromCart(id);
  }

  decressAmount(id: number): void {
    this.cart = this._CartService.decreaseAmount(id);
  }

  incressAmount(id: number): void {
    this.cart = this._CartService.incressAmount(id);
  }
}
