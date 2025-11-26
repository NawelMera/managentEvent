import { Component } from '@angular/core';
import { TagBanner } from 'component/tag-banner/tag-banner.component';

import { TypeOfEvent } from '@model/typeOfEvent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags.component',
  imports: [TagBanner, FormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  tags: TypeOfEvent[] = [];
  tagInputName = '';

  constructor() {
    // Exemple de données de tags
    this.tags = [
      { id: 1, name: 'Conférence', description: 'Événements de type conférence' },
      { id: 2, name: 'Atelier', description: 'Événements de type atelier' },
      { id: 3, name: 'Webinaire', description: 'Événements de type webinaire' },
    ];
  }
  
  onSubmit() {
    this.tags.push({
      id: this.tags[this.tags.length - 1]?.id + 1 || 1,
      name: this.tagInputName,
      description: ''
    });

    this.tagInputName = ''; 
  }

  deleteTag(tagToDelete: TypeOfEvent) {
    this.tags = this.tags.filter(tag => tag.id !== tagToDelete.id);
  }
}
