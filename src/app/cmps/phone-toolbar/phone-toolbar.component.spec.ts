import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneToolbarComponent } from './phone-toolbar.component';

describe('PhoneToolbarComponent', () => {
  let component: PhoneToolbarComponent;
  let fixture: ComponentFixture<PhoneToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneToolbarComponent]
    });
    fixture = TestBed.createComponent(PhoneToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
