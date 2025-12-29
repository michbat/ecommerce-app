import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { AffichageDate } from './pages/affichage-date/affichage-date';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Navbar, AffichageDate, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
