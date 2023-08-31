import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContantComponent } from './info-contant.component';

describe('InfoContantComponent', () => {
  let component: InfoContantComponent;
  let fixture: ComponentFixture<InfoContantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContantComponent]
    });
    fixture = TestBed.createComponent(InfoContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
