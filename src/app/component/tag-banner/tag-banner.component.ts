import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Type } from 'core/services';



@Component({
  selector: 'app-tag-banner',
  imports: [],
  templateUrl: './tag-banner.component.html',
  styleUrl: './tag-banner.component.scss',
})
export class TagBanner {
  @Input({alias: 'tag'}) tag!: Type;
  @Output() onDelete = new EventEmitter<Type>();
  
  deleteTag() {
    this.onDelete.emit(this.tag);
  }
}
