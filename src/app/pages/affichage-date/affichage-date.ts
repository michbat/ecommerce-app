import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-affichage-date',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, UpperCasePipe],
  templateUrl: './affichage-date.html',
  styleUrl: './affichage-date.css',
})
export class AffichageDate {
  today: Date = new Date();
  prix: number = 1200.5;
  quantity: number = 120;
  discount: number = 0.05;
}
