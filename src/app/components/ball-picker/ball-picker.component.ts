import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ball } from 'src/app/models/ball';
import { BallServiceService } from 'src/app/services/ball-service.service';

@Component({
  selector: 'app-ball-picker',
  templateUrl: './ball-picker.component.html',
  styleUrls: ['./ball-picker.component.sass']
})
export class BallPickerComponent implements OnInit {
  arrayColores: string[] = ["rojo", "beige", "verde", "rosa", "amarillo", "azul"];
  arrayBolas: Ball[] = [];
  bolaGanadora: Ball | undefined;
  mostrar: boolean = false;
  ganador: boolean | undefined;
  premio: number = 0;

  constructor(private ballService: BallServiceService) { }

  ngOnInit(): void {
    this.getArrayBolas().subscribe(bolas => this.arrayBolas = bolas);
    this.ballService.comprobarGanador.subscribe(data => {
      this.mostrarGanador(data);

    })
  }

  getArrayBolas(): Observable<Ball[]> {
    return of([
      { id: 1, color: "rojo" },
      { id: 2, color: "beige" },
      { id: 3, color: "verde" },
      { id: 4, color: "rosa" },
      { id: 5, color: "amarillo" },
      { id: 6, color: "azul" },
      { id: 7, color: "rojo" },
      { id: 8, color: "beige" },
      { id: 9, color: "verde" },
      { id: 10, color: "rosa" }
    ]);
  }

  selectedBall(bola: Ball): void {
    this.ballService.ballDisparador.emit({ data: bola });
  }

  limpiarArray(): void {
    this.ballService.limpiarSelecciona.emit(true);
  }

  mostrarGanador(data: any) {
    console.log(data);
    this.bolaGanadora = this.arrayBolas[data.numPremiado-1];
    this.ganador = data.ganador;
    this.premio = data.premio;
    this.mostrar = true;
    
  }

  cerrar():void{
    this.mostrar = false;
    this.ballService.limpiarSelecciona.emit(true);
  }

}
