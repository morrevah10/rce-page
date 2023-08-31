import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private selectedContentSource = new BehaviorSubject<string>(''); 
  selectedContent$ = this.selectedContentSource.asObservable();

  updateSelectedContent(content: string) {
    this.selectedContentSource.next(content);
  }
}
