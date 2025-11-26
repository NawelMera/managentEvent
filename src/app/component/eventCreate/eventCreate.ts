import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeOfEvent } from '@model/typeOfEvent';
import { TypeService } from 'core/api';
import { EventService } from 'core/api';
import { Event } from 'core/api/model/event';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-eventCreate',
  providers: [EventService, TypeService],
  imports: [FormsModule],
  templateUrl: './eventCreate.html',
  styleUrls: ['./eventCreate.scss'],
})

export class EventCreate {
  eventName: string = '';
  eventDate: string = '';
  eventDescription: string = '';
  eventType: TypeOfEvent = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(private eventService: EventService, private typeService: TypeService) {}

  createEvent() {
    const eventData : Event = {
      id: 0,
      idUser: 0,
      name: this.eventName,
      date: this.eventDate,
      description: this.eventDescription,
      idType: this.eventType.id
    };

    console.log('Date selected:', this.eventDate);
    
    return this.eventService.createEvent(eventData).subscribe(response => {
      console.log('Event created successfully', response);
    });
  } 
}
