import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event, EventService, Type, TypeService } from 'core/services';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-event.container',
  providers: [EventService, TypeService],
  imports: [FormsModule],
  templateUrl: './create-event.container.html',
  styleUrls: ['./create-event.container.scss'],
})
export class CreateEventComponent {
  eventName: string = '';
  eventDate: string = '';
  eventDescription: string = '';
  eventType: number = 0;

  allTypes: Type[] = [];

  constructor(private router: Router, private eventService: EventService, private typeService: TypeService) {
    this.getTypes();
    console.log('Types fetched:', this.allTypes);
  }

  getTypes() {
    return this.typeService.getType().subscribe(response => {
      for (let type of response) {
        this.allTypes.push(type);
      }
    });
  }

  createEvent() {
    const eventData : Event = {
      id: 0,
      idUser: 0,
      name: this.eventName,
      date: this.eventDate,
      description: this.eventDescription,
      idType: this.eventType
    };
    
    return this.eventService.createEvent(eventData).subscribe(response => {
      console.log('Event created successfully', response);
    });
  } 

  goToTags() {
    this.router.navigate(['tags']);
  }
}
