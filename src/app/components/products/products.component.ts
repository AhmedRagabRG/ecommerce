import { Component } from '@angular/core';
import { IProduct } from './interfaces/product';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
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

  constructor(private _productsService: ProductsService, private _cartService: CartService) {
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
  }

  addToCart(id: number) {
    this._cartService.addToCart(id);
  }
}
