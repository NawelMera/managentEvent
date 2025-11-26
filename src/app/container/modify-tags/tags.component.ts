import { Component } from '@angular/core';
import { TagBanner } from 'component/tag-banner/tag-banner.component';



@Component({
  selector: 'app-tags.component',
  imports: [TagBanner],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {

}
