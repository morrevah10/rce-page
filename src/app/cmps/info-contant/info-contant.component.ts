import { Component, OnInit, Type } from '@angular/core';
import { ContentService } from '../../content.service';
import { ScheduleComponent } from '../info-cmps/schedule/schedule.component';
import { WaysComponent } from '../info-cmps/ways/ways.component';
import { DatesComponent } from '../info-cmps/dates/dates.component';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-contant.component.html',
  styleUrls: ['./info-contant.component.css'],
})
export class InfoContentComponent implements OnInit {
  selectedComponent: Type<any> | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.selectedContent$.subscribe((content) => {
      console.log('Selected content:', content);
      switch (content) {
        case 'Dates':
          this.selectedComponent = DatesComponent;
          break;
        case 'Schedule':
          this.selectedComponent = ScheduleComponent;
          break;
        case 'Ways':
          this.selectedComponent = WaysComponent;
          break;
        default:
          this.selectedComponent = DatesComponent;
      }
    });
  }
}
