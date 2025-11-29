import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event, EventService, Type, TypeService } from 'core/services';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-update-event.component',
  providers: [EventService, TypeService],
  imports: [FormsModule],
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.scss',
})
export class UpdateEventComponent implements OnInit {
  eventName: string = '';
  eventDate: string = '';
  eventDescription: string = '';
  eventType: number = 0;
  eventId: number = 0;

  allTypes: Type[] = [];

  constructor(private router: Router, private eventService: EventService, private typeService: TypeService, private route: ActivatedRoute) {
    this.getTypes();
    console.log('Types fetched:', this.allTypes);
  }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventId = +eventId;
      this.getSelectedEvent(this.eventId);
    }
  }

  getTypes() {
    return this.typeService.getType().subscribe(response => {
      for (let type of response) {
        this.allTypes.push(type);
      }
    });
  }

  getSelectedEvent(id: number) {
    return this.eventService.getEvents(id).subscribe(response => {
      console.log('Selected event data:', response);
      this.eventName = response[0].name!;
      this.eventDate = response[0].date!.split('T')[0];
      this.eventDescription = response[0].description!;
      this.eventType = response[0].idType!;
    });
  }

  updateEvent() {
    const eventData : Event = {
      id: this.eventId,
      idUser: 0,
      name: this.eventName,
      date: this.eventDate,
      description: this.eventDescription,
      idType: this.eventType
    };
    
    return this.eventService.updateEvent(eventData).subscribe(response => {
      console.log('Event created successfully', response);
    });
  } 

  goToTags() {
    this.router.navigate(['tags']);
  }
}
