import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'component/header/header';
import { AuthService } from './service/auth/auth.service';
import { EventCreate } from 'component/eventCreate/eventCreate';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, EventCreate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public authService: AuthService) {}
  get checkConnexion() {
    return this.authService.connexion();
  }
}