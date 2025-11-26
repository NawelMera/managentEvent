import { Component } from '@angular/core';
import { EventCreate } from 'component/eventCreate/eventCreate';


@Component({
  selector: 'app-create-event.component',
  imports: [EventCreate],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
})
export class CreateEventComponent {

}
