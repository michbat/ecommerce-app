import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { AffichageDate } from './pages/affichage-date/affichage-date';

@Component({
  selector: 'app-root',
  imports: [Navbar, AffichageDate],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
