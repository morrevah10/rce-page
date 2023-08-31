import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCarouselComponent } from './gallery-carousel.component';

describe('GalleryCarouselComponent', () => {
  let component: GalleryCarouselComponent;
  let fixture: ComponentFixture<GalleryCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryCarouselComponent]
    });
    fixture = TestBed.createComponent(GalleryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
