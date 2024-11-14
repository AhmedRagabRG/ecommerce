import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IProduct } from '../products/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { TextSplicerPipe } from '../../pipes/text-splicer.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, TextSplicerPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() title: string = "";
  @Input() imgUrl = 'https://example.com/images/';
  @Input() price = 0;
  @Input() rating = Math.floor(6);

  @Output() addToCart = new EventEmitter<IProduct>();

  constructor() {}

  onAddToCart() {
    this.addToCart.emit();
  }

}
