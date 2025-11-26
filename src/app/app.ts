import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'component/header/header';
import { EventCreate } from 'component/eventCreate/eventCreate';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, EventCreate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('managentEvent');
}
