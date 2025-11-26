import { Component, Injectable } from '@angular/core';
import { Event } from '@model/event';
import { EventBanner } from 'component/eventBanner/eventBanner.component';
import { EventService, TypeService } from 'core/services';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home.component',
  providers: [EventService, TypeService],
  imports: [EventBanner, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent {
  events: Event[] = [];

  constructor(private eventService: EventService, private typeService: TypeService) {
    this.getEvents();
    this.getTypeOfEvents();
    console.log(this.JSONTypeOfEvents);
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
  
  getTypeOfEvents()
  {
    return this.typeService.getType().subscribe(response => {
      console.log(response);
      for (let type of response) {
        if(!type.id || !type.name) {
          continue;
        }
        this.JSONTypeOfEvents.push({id: type.id, name: type.name});
      }
    })
  }
  
JSONTypeOfEvents : Array<{id: number, name: string}> = [];  
selectedType : string ='';

}
