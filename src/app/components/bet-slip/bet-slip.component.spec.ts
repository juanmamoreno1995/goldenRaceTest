import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetSlipComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobar variables inicializadas', () => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    expect(component.arrayBolasSeleccionadas.length).toEqual(0)
    expect(component.total).toEqual(0)
    expect(component.seleccion).toEqual(0)
    expect(component.importe).toEqual(5)
    expect(component.disabledButton).toBeTrue()
    fixture.detectChanges();
    expect(component.arrayBolasSeleccionadas.length).toEqual(8)
  });

});
