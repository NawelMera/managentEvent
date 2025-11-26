import { Component, Injectable, Input } from "@angular/core";
import { Event } from "@model/event";
import { TypeService } from "core/api";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-event-banner',
  providers: [TypeService],
  imports: [],
  templateUrl: './eventBanner.component.html',
  styleUrls: ['./eventBanner.component.scss'],
})
export class EventBanner {
    @Input({alias: 'event'}) event!: Event;
    typeTag: string = '';

    constructor(private typeService: TypeService) {
    }

    ngOnInit() {
      this.getTag(this.event.idType);
    }

    getTag(idType: number) {
      return this.typeService.getType(idType).subscribe(response => {
        response[0].name && (this.typeTag = response[0].name);
      });
    }
}
