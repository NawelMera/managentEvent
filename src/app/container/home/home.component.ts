import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home.component',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  JSONTypeOfEvents =[{
    id: 1,
    name: "Concert"
  },
  {
    id: 2,
    name: "Festival"
  },
  {
    id: 3,
    name: "Spectacle"
  },
  {
    id: 4,
    name: "Exposition"
  }
];

selectedType : string ='';

}
