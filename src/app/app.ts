import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { AffichageDate } from './pages/affichage-date/affichage-date';
import { Card } from './components/card/card';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Navbar, AffichageDate, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
