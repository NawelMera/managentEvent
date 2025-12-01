import { Component, Injectable } from '@angular/core';
import { TagBanner } from 'component/tag-banner/tag-banner.component';

import { FormsModule } from '@angular/forms';
import { TypeService , Type } from 'core/services';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-tags.component',
  imports: [TagBanner, FormsModule],
  providers: [TypeService],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  tags: Type[] = [];
  tagInputName = '';

  constructor(private typeService: TypeService) {
    this.getTags();
  }

  getTags() {
    return this.typeService.getType().subscribe(response => {
      this.tags = [];
      for (let type of response) {
        if(!type.id || !type.name) {
          continue;
        }
        this.tags.push({id: type.id, name: type.name, description: type.description || ''});
      }
    })
  }
  
  onSubmit() {
    this.typeService.typePost({
      id: this.tags[this.tags.length - 1].id,
      name: this.tagInputName
    }).subscribe(() => {
      console.log('Tag added successfully');
      this.getTags();
    });

    this.tagInputName = ''; 
  }

  deleteTag(tagToDelete: Type) {
    this.typeService.typeDelete(tagToDelete.id!).subscribe(() => {
      console.log('Tag deleted successfully');
      this.getTags();
    });
  }
}
