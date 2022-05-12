import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallPickerComponent } from './ball-picker.component';

describe('BallPickerComponent', () => {
  let component: BallPickerComponent;
  let fixture: ComponentFixture<BallPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
