import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICart } from './interfaces/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: ICart[] = [];

  constructor(private _CartService: CartService) {
    this.cart = this._CartService.cart;
  }
  
}
