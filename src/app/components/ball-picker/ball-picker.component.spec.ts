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

  it('Comprobar variables inicializadas', () => {
    fixture = TestBed.createComponent(BallPickerComponent);
    component = fixture.componentInstance;
    expect(component.arrayColores.length).toEqual(6)
    expect(component.arrayBolas.length).toEqual(0)
    expect(component.bolaGanadora).toBeUndefined(true);
    expect(component.mostrar).not.toBeTrue()
    expect(component.premio).toEqual(0)
    fixture.detectChanges();
    expect(component.arrayBolas.length).toEqual(10)
  });
});
