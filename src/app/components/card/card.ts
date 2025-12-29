import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgClass,NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  userIsAdmin: boolean = false;
}
