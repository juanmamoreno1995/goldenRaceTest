import { Component, Input, OnInit } from '@angular/core';
import { Ball } from 'src/app/models/ball';
import { BallServiceService } from 'src/app/services/ball-service.service';


@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.sass']
})
export class BetSlipComponent implements OnInit {
  @Input() limpiarSeleccion: boolean | undefined;
  arrayBolasSeleccionadas: Ball[] = [];
  total: number = 0;
  seleccion: number = 0;
  importe: number = 5;
  disabledButton: boolean = true;
  constructor(private ballService: BallServiceService) {

  }

  ngOnInit(): void {
    this.ballService.ballDisparador.subscribe(data => {
      this.addBall(data.data);
    })
    this.ballService.limpiarSelecciona.subscribe(data => {
      this.checkLimpieza(data);
    })

    this.completarArrayPorDefecto();
  }

  completarArrayPorDefecto(): void {
    for (let index = 0; index < 8; index++) {
      this.arrayBolasSeleccionadas.push({ id: 0, color: "vacia" })
    }
  }
  async addBall(data: Ball) {
    var existBall: boolean = await this.checkExist(data.id);
    for (let index = 0; index < this.arrayBolasSeleccionadas.length; index++) {
      if (this.arrayBolasSeleccionadas[index].id === 0 && !existBall) {
        this.arrayBolasSeleccionadas[index].id = data.id;
        this.arrayBolasSeleccionadas[index].color = data.color;
        this.seleccion++;
        return;
      }

    }
  }

  async checkExist(idData: number): Promise<boolean> {
    for (let i = 0; i < this.arrayBolasSeleccionadas.length; i++) {
      if (this.arrayBolasSeleccionadas[i].id === idData) {
        return true;
      }
    }
    return false;
  }

  anyadirImporte(): void {
    console.log("Añadir importe " + this.importe);
    if (this.importe < 5) {
      alert("El importe mínimo son 5€")
      return;
    } else {
      this.total = this.importe * this.seleccion;
      this.disabledButton = false;
    }
  }

  async sacarBolaPremiada(): Promise<void> {
    let numPremiado = Math.floor((Math.random() * (10 - 1 + 1)) + 1)
    this.ballService.comprobarGanador.emit({
      numPremiado: numPremiado,
      ganador: await this.checkExist(numPremiado - 1),
      premio: this.total * 1.5
    })
  }

  checkLimpieza(data: boolean): void {
    if (data === true) {
      this.arrayBolasSeleccionadas = [];
      this.completarArrayPorDefecto();
      this.seleccion = 0;
      this.total = 0;
    }
  }

}
