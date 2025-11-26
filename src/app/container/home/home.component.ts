import { Component, Injectable } from '@angular/core';
import { Event } from '@model/event';
import { EventBanner } from 'component/eventBanner/eventBanner.component';
import { EventService } from 'core/api';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home.component',
  providers: [EventService],
  imports: [ EventBanner ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.getEvents();
  }

  getEvents() {
    return this.eventService.getEvents().subscribe(response => {
      for (let event of response) {
        if(!event.id || !event.name || !event.date || !event.description || !event.idType || !event.idUser) {
          continue;
        }

        this.events.push({
          id: event.id,
          idUser: event.idUser,
          name: event.name,
          date: new Date(event.date),
          description: event.description,
          idType: event.idType
        });
      }
    })
  }
}
