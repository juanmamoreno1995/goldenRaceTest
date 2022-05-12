import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BallServiceService {
  @Output() ballDisparador: EventEmitter<any> = new EventEmitter();
  @Output() limpiarSelecciona: EventEmitter<boolean> = new EventEmitter();
  @Output() comprobarGanador: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
