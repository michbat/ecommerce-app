import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'My Project';
}
