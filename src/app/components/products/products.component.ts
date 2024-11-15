import { Component } from '@angular/core';
import { IProduct } from './interfaces/product';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginationComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: IProduct[] = [];
  currentPage: number = 1;
  perPage: number = 10;
  totalItems: number;

  constructor(
    private _productsService: ProductsService,
    private _cartService: CartService,
    private viewportScroller: ViewportScroller
  ) {
    this.totalItems = this._productsService.getAllProducts().length;
    this.loadProducts();
  }

  loadProducts() {
    const start = (this.currentPage - 1) * this.perPage;
    const end = this.currentPage * this.perPage;
    this.products = this._productsService.getAllProducts(start, end);
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.loadProducts();
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  addToCart(id: number) {
    this._cartService.addToCart(id);
  }
}
