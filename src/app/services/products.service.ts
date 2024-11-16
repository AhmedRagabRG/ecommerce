import { Injectable } from '@angular/core';
import { IProduct } from '../components/products/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 49.99,
        description:
          'High-quality Bluetooth headphones with noise-cancellation.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 1.2,
        category: 'Electronics',
        isAvailable: true,
        quantity: 15,
      },
      {
        id: 2,
        name: 'Stainless Steel Water Bottle',
        price: 19.99,
        description: 'Durable, leak-proof water bottle for everyday use.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating:4.9,
        category: 'Accessories',
        isAvailable: true,
        quantity: 50,
      },
      {
        id: 3,
        name: 'Smart LED Light Bulb',
        price: 24.99,
        description:
          'Voice-controlled smart bulb with adjustable brightness and color.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 2,
        category: 'Home',
        isAvailable: true,
        quantity: 30,
      },
      {
        id: 4,
        name: 'Wireless Charger Pad',
        price: 29.99,
        description:
          'Fast-charging wireless pad compatible with multiple devices.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 4.0,
        category: 'Electronics',
        isAvailable: false,
        quantity: 0,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
      {
        id: 5,
        name: 'Yoga Mat',
        price: 14.99,
        description:
          'Eco-friendly and non-slip yoga mat, perfect for workouts.',
        imageUrl:
          'https://www.apple.com/mideast/apple-watch-se/q/images/overview/hero/non-lte/hero__f76n0zejlxqq_large.jpg',
        rating: 3,
        category: 'Sports',
        isAvailable: true,
        quantity: 20,
      },
    ];
  }

  getAllProducts(start: number|null = null, end: number|null = null) : IProduct[] {
    if (start === null || end === null) {
      return this.products;
    }

    return this.products.slice(start, end);
  }

  getProductById(id: number) : IProduct | null {
    const product = this.products.find((product) => product.id === id)
    return product ? product : null;
  }
}
