import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContantComponent } from './dialog-contant.component';

describe('DialogContantComponent', () => {
  let component: DialogContantComponent;
  let fixture: ComponentFixture<DialogContantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogContantComponent]
    });
    fixture = TestBed.createComponent(DialogContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
