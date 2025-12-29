import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-card',
  imports: [NgClass, NgStyle, CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  userIsAdmin: boolean = false;

  @Input() product?: Product = {} as Product;
}
