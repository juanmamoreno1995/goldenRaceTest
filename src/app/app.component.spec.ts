import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BallPickerComponent } from './components/ball-picker/ball-picker.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BallPickerComponent,
        BetSlipComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'goldenRaceTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('goldenRaceTest');
  });


  it('Escenario ganador', async () => {
    const fixtureSlip = TestBed.createComponent(BetSlipComponent);
    const appSlip = fixtureSlip.componentInstance;
    fixtureSlip.detectChanges();

    const fixtureBall = TestBed.createComponent(BallPickerComponent);
    const appBall = fixtureBall.componentInstance;
    fixtureBall.detectChanges();

    expect(appBall.arrayBolas.length).toEqual(10);

    const elementBallDiv = (<HTMLDivElement>document.getElementById('bola-2'));
    const elementBallDiv2 = (<HTMLDivElement>document.getElementById('bola-4'));
    await elementBallDiv.click()
    await elementBallDiv2.click()
    //comprobamos que se han insertado las bolas correctas
    expect(appSlip.arrayBolasSeleccionadas[0].id).toEqual(2);
    expect(appSlip.arrayBolasSeleccionadas[1].id).toEqual(4);

    expect(appSlip.seleccion).toEqual(2);

    const botonElemnt = fixtureSlip.debugElement.query(By.css('button.anyadir'));
    botonElemnt.nativeElement.click();
    expect(appSlip.total).toEqual(appSlip.seleccion * appSlip.importe);

    const botonPremioElemnt = fixtureSlip.debugElement.query(By.css('button.botonPremio'));
    await botonPremioElemnt.nativeElement.click();
    fixtureBall.detectChanges();
    fixtureSlip.detectChanges();
    appBall.mostrarGanador({ bolaGanadora: { id: 2, color: "beige" }, ganador: true, premio: appSlip.total * 1.5 });
  });

  it('Escenario perdedor', async () => {
    const fixtureSlip = TestBed.createComponent(BetSlipComponent);
    const appSlip = fixtureSlip.componentInstance;
    fixtureSlip.detectChanges();

    const fixtureBall = TestBed.createComponent(BallPickerComponent);
    const appBall = fixtureBall.componentInstance;
    fixtureBall.detectChanges();

    expect(appBall.arrayBolas.length).toEqual(10);

    const elementBallDiv = (<HTMLDivElement>document.getElementById('bola-2'));
    const elementBallDiv2 = (<HTMLDivElement>document.getElementById('bola-4'));
    await elementBallDiv.click()
    await elementBallDiv2.click()
    //comprobamos que se han insertado las bolas correctas
    expect(appSlip.arrayBolasSeleccionadas[0].id).toEqual(2);
    expect(appSlip.arrayBolasSeleccionadas[1].id).toEqual(4);

    expect(appSlip.seleccion).toEqual(2);

    const botonElemnt = fixtureSlip.debugElement.query(By.css('button.anyadir'));
    botonElemnt.nativeElement.click();
    expect(appSlip.total).toEqual(appSlip.seleccion * appSlip.importe);

    const botonPremioElemnt = fixtureSlip.debugElement.query(By.css('button.botonPremio'));
    await botonPremioElemnt.nativeElement.click();
    fixtureBall.detectChanges();
    fixtureSlip.detectChanges();
    appBall.mostrarGanador({ bolaGanadora: { id: 7, color: "rojo" }, ganador: false, premio: appSlip.total * 1.5 });
  });

});


