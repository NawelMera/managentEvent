import { Component, Injectable, Input } from "@angular/core";
import { EventService, TypeService , Event } from "core/services";
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-event-banner',
  providers: [TypeService],
  imports: [DatePipe],
  templateUrl: './eventBanner.component.html',
  styleUrls: ['./eventBanner.component.scss'],
})
export class EventBanner {
    @Input({alias: 'event'}) event!: Event;
    typeTag: string = '';
    connexion: boolean = false;

    constructor(private typeService: TypeService,private eventService: EventService, private router: Router) {
    }

    ngOnInit() {
      this.getTag(this.event.idType!);
      this.connexion = localStorage.getItem('connexion') === 'true';

      window.addEventListener('connexion-change', () => {
        this.connexion = localStorage.getItem('connexion') === 'true';
      });
    }

    getTag(idType: number) {
      return this.typeService.getType(idType).subscribe(response => {
        response[0].name && (this.typeTag = response[0].name);
      });
    }
    deleteEvent() {
      console.log('Deleting event with id:', this.event.id);
      return this.eventService.deleteEvent(this.event.id).subscribe(Response => {
        window.location.reload();
      });
    }
    updateEvent() {
     this.router.navigate(['event/update/'+this.event.id]); 
    }
}
