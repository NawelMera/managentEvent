import { Component, EventEmitter, Input, input, Output, Type } from '@angular/core';
import { TypeOfEvent } from '@model/typeOfEvent';



@Component({
  selector: 'app-tag-banner',
  imports: [],
  templateUrl: './tag-banner.component.html',
  styleUrl: './tag-banner.component.scss',
})
export class TagBanner {
  @Input({alias: 'tag'}) tag!: TypeOfEvent;
  @Output() onDelete = new EventEmitter<TypeOfEvent>();
  
  deleteTag() {
    this.onDelete.emit(this.tag);
  }
}
