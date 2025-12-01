import { Component, Injectable } from '@angular/core';
import { Event } from 'core/services';
import { EventBanner } from 'component/eventBanner/eventBanner.component';
import { EventService, TypeService, Type } from 'core/services';
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
  shownEvents: Event[] = [];
  typeOfEvents : Type[] = [];  

  searchText: string = '';
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  searchType: string = "N'importe quel type";
  

  constructor(private eventService: EventService, private typeService: TypeService) {
    this.getEvents();
    this.getTypeOfEvents();
    this.filter()
  }

  filter() {
    this.shownEvents = this.events;
    // console.log(this.dateFrom);
    // console.log(this.dateTo);

    // if (this.searchText.trim() !== '') {
    //   this.shownEvents = this.events.filter(event =>
    //     event.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     event.description.toLowerCase().includes(this.searchText.toLowerCase())
    //   );
    // }

    if (this.searchType !== "N'importe quel type") {
      this.shownEvents = this.shownEvents.filter(event => {
        const eventType = this.typeOfEvents.find(type => type.id === event.idType);
        return eventType ? eventType.name === this.searchType : false;
      });
    }

    // if (this.dateFrom) {
    //   const newDateFrom = new Date(this.dateFrom!);
    //   this.shownEvents = this.shownEvents.filter(event => event.date >= newDateFrom);
    // }
    // if (this.dateTo) {
    //   const newDateTo = new Date(this.dateTo!);
    //   this.shownEvents = this.shownEvents.filter(event => event.date <= newDateTo);
    // }
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
          date: event.date,
          description: event.description,
          idType: event.idType
        });
      }
    })
  }
  
  getTypeOfEvents()
  {
    return this.typeService.getType().subscribe(response => {
      for (let type of response) {
        if(!type.id || !type.name || !type.description)
          continue;

        this.typeOfEvents.push({
          id: type.id, 
          name: type.name,
          description: type.description
        });
      }
    })
  }
  

}
