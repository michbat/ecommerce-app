import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/product';



@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 1',
      category: 'Category 1',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 150,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 2',
      category: 'Category 2',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 80,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 3',
      category: 'Category 3',
    },
    {
      id: 4,
      title: 'Product 4',
      price: 220,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 4',
      category: 'Category 4',
    },
    {
      id: 5,
      title: 'Product 5',
      price: 130,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 5',
      category: 'Category 5',
    },
    {
      id: 6,
      title: 'Product 6',
      price: 180,
      image: 'https://picsum.photos/200/150',
      rating: {
        rate: 0,
        count: 0,
      },
      description: 'Description 6',
      category: 'Category 6',
    },
  ];
}
