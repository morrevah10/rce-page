import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
@Component({
  selector: 'info-nav',
  templateUrl: './info-nav.component.html',
  styleUrls: ['./info-nav.component.scss']
})
export class InfoNavComponent {
  constructor(private contentService: ContentService) {}

  onButtonClick(content: string) {
    this.contentService.updateSelectedContent(content);
    console.log(content)
  }
  
}
